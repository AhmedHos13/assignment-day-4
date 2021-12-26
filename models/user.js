const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: "string",
    minlength: 8,
    unique: true,
    required: true,
  },
  firstName: {
    type: "string",
    minlength: 5,
    maxlength: 15,
    required: true,
  },
  lastName: {
    type: "string",
    minlength: 5,
    maxlength: 15,
  },
  password: {
    type: "string",
    required: true,
  },
  dob: {
    type: Date,
  },
});

userSchema.pre("save", function () {
  console.log(this);
  const hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
