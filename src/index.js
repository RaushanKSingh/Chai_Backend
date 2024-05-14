// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";
import { app } from "./app.js";

import connectDB from "./db/index.js";

dotenv.config({
  path: "/.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`ConnectDB connection error !! ${error}`);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("err", (err) => {
      console.log("ERROR: ", err);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on ${PORT}`);
    });
  } catch (e) {
    console.log("ERROR: ", e);
    throw e;
  }
})();
*/
