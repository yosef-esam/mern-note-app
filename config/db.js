import mongoose from "mongoose";
export const conntectDB = async () => {
  const connect = await mongoose.connect(process.env.mongoDb_url, {});
  console.log(`Mongo db connect ${connect.connection.host}`);
};
