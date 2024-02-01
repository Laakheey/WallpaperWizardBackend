import express from "express";
import dotenv from "dotenv";
import connectDb from "./utils/dbConnect";
import wallpaper_router from './router/wallpaper-route';
import cors from 'cors'

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/wallpaper", wallpaper_router);

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listening to port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("Internet connection problem");
  });
