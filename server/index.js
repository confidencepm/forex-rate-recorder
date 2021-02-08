const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'C108629d',
    database: 'ExchangeRateDatabase'
});

app.post('/store', (req, res) => {
    const date = req.body.date;
    const time = req.body.time;
    const high = req.body.high;
    const low = req.body.low;
    const average = req.body.average;

    db.query(
        "INSERT INTO exchangeRates (date, time, high, low, average) VALUES (?,?,?,?,?)",
        [date, time, high, low, average], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
                console.log(result);
            }
        }
    );
});

app.listen(3001, () => {
    console.log("Server running on port 3001")
})
