const express = require("express");
const mongoose = require("mongoose");
const localConfig = require("./utils/config");
const app = new express();
const userRouter = require("./router/userRoute");

app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.use("/api/users", userRouter);

mongoose.set("strictQuery", false);
mongoose
  .connect(localConfig.MONGO_URL)
  .then(() => {
    console.log("Connect to Mongodb");
    app.listen(3000, () => {
      console.log(
        `SERVER RUNNING at ${localConfig.host}:${localConfig.port}/ `
      );
    });
  })
  .catch((error) => {
    console.error("no connection");
  });
