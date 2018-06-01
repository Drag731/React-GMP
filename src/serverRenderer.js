import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Root from './Root';
import configureStore from '../src/configure-store';
import { renderRoutes, matchRoutes } from "react-router-config"
import { routes } from "./routes"

function renderHTML(html, preloadedState) {
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
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
    return (req, res) => {
        const store = configureStore();
        const { url } = req;
        // This context object contains the results of the render
        const context = {isServer: true};

        // For each route that matches
        const promises = matchRoutes(routes, url).map(({route, match}) => {
            console.log("match" , match);
            // Load the data for that route. Include match information
            // so route parameters can be passed through.
            return route.loadData ? store.dispatch(route.loadData(match)) : Promise.resolve(null)

        });

        const root = (
            <Root
                context={context}
                location={url}
                Router={StaticRouter}
                store={store}
            />
        );

        Promise.all(promises).then(() => {
            const htmlString = renderToString(root);

            // context.url will contain the URL to redirect to if a <Redirect> was used
            if (context.url) {
                res.writeHead(302, {
                    Location: context.url,
                });
                res.end();
                return;
            }

            const preloadedState = store.getState();

            res.send(renderHTML(htmlString, preloadedState));
        })
    };
}