const express = require("express");
const router = express.Router();
// const {
//   validateTodoTitle,
//   validateTodoStatus,
//   validateTodoTags,
// } = require("../middlewares/validationTodo");
const Todo = require("../models/todo");
const {
  create,
  find,
  findOne,
  update,
  remove,
} = require("../controllers/todo");

//get all todos with user info:

router.get("/", async (req, res, next) => {
  find()
    .populate("user")
    .then((docs) => res.json(docs))
    .catch((e) => next(e));
});

// get todo with user ID info

router.get("/:id", async (req, res, next) => {
  findOne(req.params.id)
    .populate("user")
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

//create todo :

router.post("/", async (req, res, next) => {
  const userId = req.user.id;
  
  create({ ...req.body, user: userId })
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

//update todo :

router.patch("/:id", async (req, res, next) => {
  update(req.params.id, req.body)
    .then((doc) => res.json(doc))
    .then(console.log(req.body))
    .catch((e) => next(e));
});

//delete todo :

router.delete("/:id", async (req, res, next) => {
  remove(req.params.id)
    .then((doc) => res.json(doc))
    .catch((e) => next(e));
});

module.exports = router;
