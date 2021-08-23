const app = require("./server");
const mongoose = require("mongoose");

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
