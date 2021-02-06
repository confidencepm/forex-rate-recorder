const express = require('express')
const app = express()
const mysql =require('mysql')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'C108629d',
    database: 'exchange_rate_db'
});

app.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO exchange_rates('eur', 'usd', 'rate_time') VALUES ('1', '1.2074', '05-02-2021 14:46');"
    db.query(sqlInsert, (err, result) => {
        res.send('Hello Confidence!');
    })
});

app.listen(3001, () => {
    console.log("running on port 3001")
});