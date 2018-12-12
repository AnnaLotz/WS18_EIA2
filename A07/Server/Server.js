"use strict";
const Http = require("http");
const Url = require("url");
var A06_SendData;
(function (A06_SendData) {
    console.log("Starting server");
    let port = process.env.PORT;
    if (port == undefined)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        if (_request.url != "/favicon.ico") {
            console.log("I hear voices!");
            _response.setHeader("content-type", "text/html; charset=utf-8");
            _response.setHeader("Access-Control-Allow-Origin", "*");
            let query = Url.parse(_request.url, true).query;
            console.log("requestUrl: " + _request.url);
            console.log(query);
            for (let key in query) {
                let product = query[key];
                console.log(key + "= " + product.toString());
                _response.write(key + " = " + product.toString() + "<br>");
            }
            _response.end();
        }
    } //close handleRequest
})(A06_SendData || (A06_SendData = {})); //close Namespace
//# sourceMappingURL=Server.js.map