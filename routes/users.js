const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
// const {
//   validateUseruserName,
//   validateUserfirstName,
//   validateUserlastName,
//   validateUserdob,
// } = require("../middlewares/validationUser");
const User = require("../models/user");
const {
  create,
  login,
  find,
  findOne,
  update,
  remove,
} = require("../controllers/user");

//get Users firstName:

router.get("/", async (req, res) => {
  find({}, { firstName: 1 })
    .then((docs) => res.json(docs))
    .catch((e) => next(e));
});

// get todo with user ID info

router.get("/:id", async (req, res, next) => {
  findOne(req.params.id)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

// signup Users :

router.post("/signup", async (req, res, next) => {
  create(req.body)
    .then((doc) => res.json(doc))
    .then((doc) => console.log(doc))
    .catch((e) => next(e));
});

// login users :
router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;
  const token = await login({ username, password });
  res.json({ token });
});

router.patch("/:id", async (req, res, next) => {
  update(req.params.id, req.body)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

router.delete("/:id", async (req, res, next) => {
  remove(req.params.id)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

///exporting module :

module.exports = router;
