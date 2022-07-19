const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));


const PORT = 5000;

app.use("/api/v1/tasks",taskRoute);

const start = async () => {
    try{
        await connectDB(MONGO_HEROKU_URL || process.env.MONGO_URL);
        app.listen(process.env.PORT || PORT,　console.log("サーバーが起動しました"));
    } catch (err) {
        console.log(err);
    }
};

start()

