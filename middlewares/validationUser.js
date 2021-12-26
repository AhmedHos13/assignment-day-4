const validateUseruserName = (req, res, next) => {
  const { userName } = req.body;
  if (!userName) {
    next("userName not found");
    res.status(404);
  }
  next();
};

const validateUserfirstName = (req, res, next) => {
  const { firstName } = req.body;
  if (!firstName) {
    next("firstName not found");
    res.status(404);
  }
  next();
};

const validateUserlastName = (req, res, next) => {
  const { lastName } = req.body;
  if (!lastName) {
    next("lastName not found");
    res.status(404);
  }
  next();
};

const validateUserdob = (req, res, next) => {
  const { dob } = req.body;
  if (!dob) {
    next("Date of Birth not found");
    res.status(404);
  }
  next();
};

module.exports = {
  validateUseruserName,
  validateUserfirstName,
  validateUserlastName,
  validateUserdob,
};
