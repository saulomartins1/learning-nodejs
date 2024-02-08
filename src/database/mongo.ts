import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClientDB = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    try {
      const uri = process.env.MONGO_URI as string;

      const client = new Mongo(uri);
      const database = client.db("users-db");

      this.client = client;
      this.db = database;

      console.log("Connected to MongoClientDB");
    } catch (error) {
      console.log("Fail MongoClientDB");
    }
  },
};
