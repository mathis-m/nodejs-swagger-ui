
import spec from "../swagger/spec"
import swaggerHtml from "../swagger/ui/swagger-html"

export const baseRouteAction = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is a plain http server.");
    res.end();
}

export const someRouteAction = (req, res, handler) => {
    const id = handler.regex.exec(req.url).groups?.id
    if(id == null) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.write("Path Parameter id not found.");
        res.end();
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify({
        id
    }));
    res.end();
}

export const swaggerUiAction = (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(swaggerHtml);
    res.end();
}

export const swaggerSpecAction = (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(spec));
    res.end();
}
