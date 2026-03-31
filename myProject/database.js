const mongoose = require("mongoose");

async function main() {
    // await mongoose.connect("mongodb+srv://kumar123:kumar12345@kumarji.ua2gz4t.mongodb.net/?appName=kumarJi");
    await mongoose.connect("mongodb+srv://kumar123:kumar12345@kumarji.ua2gz4t.mongodb.net/mydb");
}

main()
.then(() => console.log("Connected to Database bro"))
.catch((err) => console.log(err));   // ✅ fix here



