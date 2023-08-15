const express = require("express");
const mongoose = require("mongoose");
const localConfig = require("./utils/config");
const app = new express();
const userRouter = require("./router/userRoute");
const middleware = require("./middleware/ErrorMidleware");

app.use(express.json());
app.use(middleware);

app.use("/api/users", userRouter);
mongoose.set("strictQuery", false);
mongoose
  .connect(localConfig.MONGO_URL)
  .then(() => {
    console.log("Connect to Mongodb");
    app.listen(3000, () => {
      console.log(
        `SERVER RUNNING at ${localConfig.HOST}:${localConfig.PORT}/ `
      );
    });
  })
  .catch((error) => {
    console.error("no connection");
  });
