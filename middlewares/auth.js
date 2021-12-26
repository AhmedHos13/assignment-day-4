const jwt = require("jsonwebtoken");
const User = require("../models/user");
const auth = (req, res, next) => {
  const { authorization } = req.headers;
  const payLoad = jwt.verify(
    authorization,
    "ajfnljhgsdfuicvbksjyasd757h12ralsdkjvoiqwqq"
  );
  const user = User.findOne({ username: payLoad.username }).then((user) => {
    req.user = user;
    next();
  });

  console.log(payLoad);
};

module.exports = auth;
