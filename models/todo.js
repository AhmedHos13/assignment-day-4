const mongoose = require("mongoose");
const todoschema = new mongoose.Schema({
  title: {
    type: "string",
    minlength: 3,
    maxlength: 20,
    required: [true, "title is required!"],
  },
  status: { type: [], default: "not-loaded" },
  tags: { type: "string", maxlength: 20 },
  user: {
    type: mongoose.SchemaTypes.ObjectID,
    ref: "User",
    require: true, 
  },
});

const Todo = mongoose.model("Todo", todoschema);
module.exports = Todo;
