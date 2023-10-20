const mongoose = require("mongoose");

//connecting to db
try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
} catch (error) {
  throw new Error("Couldn't connect to Mongoose");
}
