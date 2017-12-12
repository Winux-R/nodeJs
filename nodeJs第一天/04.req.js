/**
 * Created by Winux-R on 2017/12/12.
 */
const http = require('http');

const server = http.createServer( (req, res) => {
    res.end(req.url);
});

server.listen(3003, () => {
    console.log("server start");
})