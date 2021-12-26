const Todo = require("../models/todo");
const create = (todo) => Todo.create(todo);
const find = (query) => Todo.find(query);
const findOne = (query) => Todo.findById(query);
const update = (query, newdata) =>
  Todo.findByIdAndUpdate(query, newdata, { new: true, runValidators: true });
const remove = (query) => Todo.findByIdAndDelete(query);

module.exports = { create, find, findOne, update, remove };
