const db = require("../database/connection");
const bcrypt = require('bcryptjs');

function get(req, res) {
    res.send("register");
}

function register(req, res) {

    const data = req.body;
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const values = [
        data.userName,
        hashedPassword
    ];

    db.query(`SELECT * FROM users WHERE username=$1`, [data.userName])
        .then((data) => {
            if (!data.rows.length) {
                db.query(
                    `INSERT INTO users (username, password) VALUES ($1,$2)`,
                    values
                )
                    .then(() => {
                        res.send({ success: true, message: "Registration is done!" });
                    })

                    .catch((error) => {
                        console.log(error);
                        res.end(`
                          <h1>Something went wrong</h1>
                        `);
                    });

            } else {
                res.send({ success: false, message: "You have already registered, go to the login page" });
            }
        });
}

module.exports = { get, register };
