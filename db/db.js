const mongoose = require("mongoose");

const connect = async () => {
  await mongoose
    .connect("mongodb+srv://alok123bth:alok1246@cluster0.kteajuz.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
      console.log("Database connected 🫙 🫙 🫙");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
