const app = require("./server");
const mongoose = require("mongoose");

/**
 * startUp function
 * Connects to database and starts listening on port 8080
 */
const startUp = async () => {
  try {
    await mongoose.connect("mongodb://scrape-mongo-srv:27017/scrape", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (err) {
    console.log(err);
  }

  app.listen(8080, () => {
    console.log("Server on port", 8080);
  });
};

startUp();
