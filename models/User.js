const mongoose = require("mongoose"); // ODM Object Document Mapper
const Schema = mongoose.Schema;
// the goal of the Schema constuctor is to feed model...
// the Schema is the blueprint : here for each artist that we wanna insert in database
const userSchema = new Schema(
  {
    name: String,
    email: String,
    favoriteLanguage: String,
  },
  { timestamps: true }
);



// ANY MODEL HAS ONE GOAL : GIVING YOU ACCESS TO C.R.U.D functions
// CREATE + READ + UPDATE + DELETE
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
