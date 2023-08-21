// import express module
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");

// import env
require("dotenv").config();

// express 사용
const app = express();

// DB info
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// DB connect
connection.connect((err) => {
    if (err) throw err;
    console.log("DB connected");
});

app.use(bodyParser.json());

// assign static folder
app.use(
    "/static",
    express.static(path.resolve(__dirname, "frontend", "static"))
);

// api
app.get("/", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

app.get("/api/getUserList", (req, res) => {
    console.log(req.body);
    const sql = `SELECT * FROM user`;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// 404 error handling
app.get("*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
});

// port 생성 서버 실행
app.listen(process.env.PORT || 3000, () => console.log("Server running ...."));
