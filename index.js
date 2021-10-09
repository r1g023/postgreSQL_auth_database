require("dotenv").config();
const { query } = require("express");
const server = require("./api/server");

//PORT 5000
const PORT = process.env.PORT || 8000;

// server.get("/api/user", (req, res, next) => {
//   let queryParam = req.query;
//   console.log(queryParam.email);
//   res.json(queryParam);
// });

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});
