const router = require("express").Router();
const scrape = require("../util/scrape");

router.post("/api/scrape", scrape);

module.exports = router;
