import http from "http";
import * as routes from "./routes"
const port = process.env.PORT || 5555;

const apiRoutes = [
    {
        url: "/api",
        method: "GET",
        action: routes.baseRouteAction
    },
    {
        regex: /\/some\/(?<id>\d+)/,
        method: "GET",
        action: routes.someRouteAction
    },
]

const swaggerRoutes = [
    {
        url: "/docs",
        method: "GET",
        action: routes.swaggerUiAction
    },
    {
        url: "/swagger.json",
        method: "GET",
        action: routes.swaggerSpecAction
    }
]

const server = http.createServer(async (request, response) => {
    handleRoute(request, response, [
        ...apiRoutes,
        ...swaggerRoutes
    ]);
});

const handleRoute = (req, res, handlers) => {
    const matcher = handler => {
        if(handler.url) {
            return handler.url === req.url && handler.method === req.method
        } else if (handler.regex) {
            return  handler.method === req.method && handler.regex.exec(req.url) !== null
        }
    }
    const handler = handlers.find(handler => matcher(handler));
    if(!handler) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Could not resolve route" }));
        return;
    }
    handler.action(req, res, handler);
}

server.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});