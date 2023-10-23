const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  const header = req.header("Authorization");
  if (header) {
    const token = header.replace("Bearer ", "");
    jwt.verify(token, process.env.JWT_SECRET, async (err, payLoad) => {
      if (err) {
        return res.status(401).send({
          error: err.message,
          message: "Token has been expired please authenticate!",
        });
      }
      const user = await User.findOne({
        _id: payLoad._id,
        "tokens.token": token,
      });

      if (!user) {
        return res.status(401).send({
          error: "Invalid Token!",
          message: "User not Found Please Authenticate!",
        });
      }
      req.token = token;
      req.user = user;
      next();
    });
  } else {
    res.status(403).send({
      error: "Please Authenticate.",
      message: "Please Authenticate!",
    });
  }
};

module.exports = auth;
