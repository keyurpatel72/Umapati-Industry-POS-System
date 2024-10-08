// const mongoose = require("mongoose");
// require("colors");

// //connecDB Function

// const connectDb = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
//   } catch (error) {
//     console.log(`Error : ${error.message}`.bgRed);
//     process.exit(1);
//   }
// };

// //export
// module.exports = connectDb;

const mongoose = require("mongoose");
require("colors");

//connecDB Function

const connectDb = async () => {
  try {
    const conn = await mongoose.connect('mongodb://0.0.0.0:27017/pos');
    console.log(`MongoDB Connected ${conn.connection.host}`.bgYellow);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

//export
module.exports = connectDb;