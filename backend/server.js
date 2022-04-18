const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;

const app = express();

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
});
