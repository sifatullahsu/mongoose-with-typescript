import mongoose from "mongoose";
import app from "./app";

const port = process.env.PORT || 5000;

async function main() {
  try {
    // database connection
    await mongoose.connect("mongodb://127.0.0.1:27017/mongoose-with-typescript");
    console.log(`Database connection successful.`);

    // server listen
    app.listen(port, () => console.log(`Server running on ${port} port.`));
  }
  catch (err) {
    console.log(`Database connection failed.`, err);
  }
}

main();