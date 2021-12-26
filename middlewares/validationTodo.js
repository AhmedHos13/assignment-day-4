
const validateTodoTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    next("title not found");
    res.status(404);
  }
  next();
};

const validateTodoStatus = (req, res, next) => {
  const { status } = req.body;
  if (!status) {
    next("status not found");
    res.status(404);
  }
  next();
};

const validateTodoTags = (req, res, next) => {
  const { tags } = req.body;
  if (!tags) {
    next("tags not found");
    res.status(404);
  }
  next();
};

module.exports = { validateTodoTitle, validateTodoStatus, validateTodoTags };
