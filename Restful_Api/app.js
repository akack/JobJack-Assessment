var express = require("express");
var app = express();
app.use(express.json())

const dirTree = require("directory-tree");
var os = require("os");
const hostname = os.homedir();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post("/url", (req, res, next) => {
    try {
        let path = req.body.filePath;
        if(path == null) return res.status(400).send('Path cannot be found.')
        path = hostname + path;
        const tree = dirTree(path, {attributes:['mode', 'mtime', 'extension', 'size', 'ctime', 'type']});
        return res.send(tree);
    } catch (error) {
        return res.status(404).send('Error occurred.')
    }
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});