const express = require("express");
const userRoutes = require("./routes")
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

app.get("/", (request, response) => {
    response.send("Running");
});

module.exports = app;