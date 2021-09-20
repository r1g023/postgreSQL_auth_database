require("dotenv").config();
const server = require("./api/server");

//PORT 5000
const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`);
});
