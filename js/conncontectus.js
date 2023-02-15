const {
    createpool

} = require("mysql");
const pool = createpool({
    host: "localhost",
    user: "root",
    password: "suraj",
    database: "glaniversity",
    connectionLimit: 10
})
pool.query("select*from contectus", (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    return console.log(result)
})
