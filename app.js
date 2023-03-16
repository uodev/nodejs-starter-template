const app = require("./server");
const databaseConnection = require("./config/db");

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
  //!db connection will be here
  databaseConnection();
});
