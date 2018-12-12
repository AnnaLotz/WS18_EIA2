import * as Http from "http";
import * as Url from "url";

namespace A06_SendData {

    interface AssocProd {
        [key: string]: string;
    }

    console.log("Starting server");
    let port: number = process.env.PORT;
    if (port == undefined)
        port = 8100;

    let server: Http.Server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);

    function handleListen(): void {
        console.log("Listening");
    }


    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        if (_request.url != "/favicon.ico") {

            console.log("I hear voices!");

            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");

            let query: AssocProd = Url.parse(_request.url, true).query;

            console.log("requestUrl: " + _request.url);
            console.log(query);

            for (let key in query) {
                let product: string = query[key];
                console.log(key + "= " + product.toString());
                _response.write(key + " = " + product.toString() + "<br>");
            }


            _response.end();
        }
    } //close handleRequest
} //close Namespace