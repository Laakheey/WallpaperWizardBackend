import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (process.env.MONGOURI) {
      await mongoose.connect(process.env.MONGOURI);
      console.log("Db connected");
    } else {
      console.log("Error connecting db");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;
