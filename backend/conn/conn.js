const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose.connect("mongodb+srv://omkarpawtekar12:1234@cluster0.wpwswrw.mongodb.net/").then(() => {
      console.log("Connected");
    });
  } catch (error) {
    console.log(error);
  }
};
conn();
