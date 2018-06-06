import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';
import configureStore from '../src/modules/configure-store';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import stats from '../public/react-loadable.json';

function renderHTML(html, preloadedState, bundles) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link rel="icon" href="data:;base64,iVBORw0KGgo=">
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
          </script>
          <script src="/public/vendor.js"></script>
          ${bundles.map(bundle => {
            return `<script src="/public/${bundle.file}"></script>`
          }).join('\\n')}
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();
        // This context object contains the results of the render
        const context = {isServer: true};

        const root = (
            <Root
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        );

        store.runSaga().done.then(() => {
            let modules = [];

            const htmlString = renderToString(
                <Loadable.Capture report={moduleName => modules.push(moduleName)}>
                    root
                </Loadable.Capture>
            );

            let bundles = getBundles(stats, modules);

            // context.url will contain the URL to redirect to if a <Redirect> was used
            if (context.url) {
                res.writeHead(302, {
                    Location: context.url,
                });
                res.end();
                return;
            }

            const preloadedState = store.getState();

            res.send(renderHTML(htmlString, preloadedState, bundles));
        });

        // Do first render, starts initial actions.
        renderToString(root);
        // When the first render is finished, send the END action to redux-saga.
        store.close();
    }
}