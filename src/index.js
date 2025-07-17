const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const app = express();
const {apiRouter} = require("./routes/index");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// app.get("/ping", (req, res) => {
//   res.send("Ping");
// });

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
