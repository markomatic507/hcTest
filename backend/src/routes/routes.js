const router = require("express").Router();
const scrape = require("../util/scrape");
const Scraped = require("../models/scraped");

router.post("/api/scrape", scrape);

router.get("/api/scrape", (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Scraped.find(condition)
    .then((data) => {
      res.send({ scraped: data });
    })
    .catch((err) => {
      return res.status(500).send({ message: "Error" });
    });
});

module.exports = router;
