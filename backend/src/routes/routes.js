const router = require("express").Router();
const scrape = require("../util/scrape");

router.post("/a", scrape);

module.exports = router;
