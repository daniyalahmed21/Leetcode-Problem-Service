const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const app = express();
const { apiRouter } = require("./routes/index");
const { errorHandler } = require("./utils/errorHandler");
const { connectDb } = require("./config/db.config");
const { default: mongoose } = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// app.get("/ping", (req, res) => {
//   res.send("Ping");
// });

app.use("/api", apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server running at port ${PORT}`);
  await connectDb();
  const Cat = mongoose.model("Cat", { name: String });

  const kitty = new Cat({ name: "Zildjian" });
  kitty.save().then(() => console.log("meow"));
});
