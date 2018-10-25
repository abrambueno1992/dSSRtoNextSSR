// const proxy = require('express-http-proxy');
const express = require('express');
const next = require('next');
const devProxy = {
    '/api': {
        target: 'http://react-ssr-api.herokuapp.com',
        pathRewrite: { '^/api': '/' },
        changeOrigin: true
    }
}
const port = 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare()
    .then(() => {
        const server = express();

        // server.use('/api', proxy('http://react-ssr-api.herokuapp.com', {
        //     proxyReqOptDecorator(opts) {
        //         opts.headers['x-forwarded-host'] = 'localhost:3000';
        //         return opts;
        //     }
        // }))
        // Set up the proxy.
        if (dev && devProxy) {
            const proxyMiddleware = require('http-proxy-middleware')
            Object.keys(devProxy).forEach(function (context) {
                server.use(proxyMiddleware(context, devProxy[context]))
            })
        }
        // server.get('/email/:id', (req, res) => {
        //     const actualPage = '/email';
        //     const queryParams = { id: req.params.id }
        //     app.render(req, res, actualPage, queryParams);
        // })

        // server.get('/', (req, res) => {
        //     app.render(req, res, '/');
        // })
        // server.get('/admins', (req, res) => {
        //     app.render(req, res, '/admins')
        // })
        // server.get('/users', (req, res) => {
        //     app.render(req, res, '/users')
        // })
        server.get('*', (req, res) => {
            return handle(req, res);
        })
        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`Server running on http://localhost:${port}`)
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })