import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log(err));
};

export default connectDB;
