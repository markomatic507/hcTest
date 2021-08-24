const mongoose = require("mongoose");

const scrapedSchema = new mongoose.Schema({
  link: String,
  image: String,
  name: String,
  desc: String,
  connections: String,
  about: String,
  exp: {},
  topSkills: {},
});

scrapedSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Scraped = mongoose.model("User", scrapedSchema);

module.exports = Scraped;
