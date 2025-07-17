const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())



app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
