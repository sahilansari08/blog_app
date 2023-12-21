const express = require("express");
const app = express();
const authRouter = require("./routes/auth")


app.use("/auth", authRouter)

app.listen(5000, () => {
    console.log('listening....');
})