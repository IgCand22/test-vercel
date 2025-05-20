const express = require('express');
const { listen } = require('express/lib/application');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.listen(port, () => {
    console.log(`App funcionando na porta ${port}`)
});