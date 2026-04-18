import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

afterAll(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
  await mongoose.connection.close();
});