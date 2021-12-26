const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const create = (user) => User.create(user);

const find = (query, projection) => User.find(query, projection);
const findOne = (query) => User.findById(query);
const update = (query, newdata) =>
  User.findByIdAndUpdate(query, newdata, { new: true, runValidators: true });
const remove = (query) => User.findByIdAndDelete(query);

const login = async ({ username, password }) => {
  const user = await User.findOne({ username });
  const isValid = bcrypt.compareSync(password, user.password);
  console.log(isValid);
  if (!isValid) {
    throw new Error("UN-AUTH");
  }
  const token = jwt.sign(
    {
      username,
      _id: user.id,
      maxAge: "10d",
    },
    "ajfnljhgsdfuicvbksjyasd757h12ralsdkjvoiqwqq"
  );
  return token;
};

module.exports = { create, login, find, findOne, update, remove };
