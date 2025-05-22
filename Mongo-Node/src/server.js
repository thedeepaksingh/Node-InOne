import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "Office247";

async function main() {
  try {
    await client.connect();
    console.log("✅ Connected successfully to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("employees");

    const insertResult = await collection.insertOne({
      name: "Alice Johnson",
      position: "HR",
      age: 29,
    });
    console.log("Document inserted:", insertResult.insertedId);

    const docs = await collection.find().toArray();
    console.log("All Employees:", docs);
  } catch (err) {
    console.error("❌ Error:", err);
  } finally {
    await client.close();
  }
}

main();
