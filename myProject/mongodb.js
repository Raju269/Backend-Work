// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";


// dotenv.config();
// const PORT = 3000;
// const app = express();

// app.use(express.json());

// await mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("db is connected");
//   })

//   .catch((err) => {
//     console.log(err);
//   });

//   const userSchema = new mongoose.Schema({
//     username: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     email: {
        
//       type: String,
//       required: true,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   });

//   const Users = mongoose.model("Uer", userSchema); 
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT} `);
// });
