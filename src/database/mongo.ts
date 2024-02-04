import { MongoClient as Mongo } from "mongodb";

export const MongoClientDB = {
  async connect(): Promise<void> {
    try {
      const uri = process.env.MONGO_URI as string;

      const client = new Mongo(uri);
      const database = client.db("get-users");

      await client.connect();
      console.log("Connected to MongoClientDB");
    } catch (error) {
      console.log("Fail MongoClientDB");
    }
  },
};
