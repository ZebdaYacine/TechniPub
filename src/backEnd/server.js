const express = require("express");
const mongoose = require("mongoose");
const localConfig = require("./utils/config");
const app = new express();
const userRouter = require("./router/userRoute");
const middleware = require("./middleware/ErrorMidleware");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const corsOptions = {
  origin: localConfig.FRONTEND,
  optionsSuccessStatus: 200,
};
app.use(cors());

app.use(express.json());

app.use("/api/users", userRouter);

//app.use(middleware);

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
    console.log("database connection failed. exiting now...");
    console.error(error);
    process.exit(1);
  });
