const app = require("./app");
const ConnectDB = require("./config/database");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.port || 3000;

ConnectDB();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
