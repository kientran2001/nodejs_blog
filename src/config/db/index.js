const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://kien:kien@cluster0.362pnra.mongodb.net/f8_education_dev"
    );
    console.log('Connect Successfully !!!');
  } catch (error) {
    console.log("fail");
  }
}

module.exports = { connect };
