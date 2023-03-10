const app = require("./server");
const databaseConnection = require("./config/db");

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  //!db connection will be here
  databaseConnection();
});
