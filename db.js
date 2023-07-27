/** Database for lunchly */

const { Client } = require("pg");

let client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "",
    database: "lunchly",
    
});

client.connect();

module.exports = client;
