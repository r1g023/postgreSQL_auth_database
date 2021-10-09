const router = require("express").Router();

router.get("/", (req, res, next) => {
  let queryParam = req.query;
  console.log(queryParam.email);
  res.json(queryParam);
});

module.exports = router;
