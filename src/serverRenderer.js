import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import Root from './Root';
import configureStore from '../src/modules/configure-store';

function renderHTML(html, preloadedState, js, styles, cssHash, scripts, stylesheets) {
    return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <link rel="icon" href="data:;base64,iVBORw0KGgo=">
          ${styles}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
          </script>
          
          ${cssHash}
          ${js}
        </body>
      </html>
  `;
}

export default function serverRenderer({ clientStats }) {
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
            const htmlString = renderToString(root);

            const chunkNames = flushChunkNames();
            const {
                js,
                styles,
                cssHash,
                scripts,
                stylesheets
            } = flushChunks(clientStats, {chunkNames});

            console.log('Dynamic Chunk Names Rendered', chunkNames);
            console.log('Scripts', scripts);
            console.log('Styles', stylesheets);

            // context.url will contain the URL to redirect to if a <Redirect> was used
            if (context.url) {
                res.writeHead(302, {
                    Location: context.url,
                });
                res.end();
                return;
            }

            const preloadedState = store.getState();

            res.send(renderHTML(htmlString, preloadedState, js, styles, cssHash, scripts, stylesheets));
        });

        // Do first render, starts initial actions.
        renderToString(root);
        // When the first render is finished, send the END action to redux-saga.
        store.close();
    }
}