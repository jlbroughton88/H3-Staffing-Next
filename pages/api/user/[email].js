const db = require("../../../lib/db");
const escape = require("sql-template-strings");

// GET USER (email)

module.exports = async (req, res) => {
    let rq = req.params;
    const user = await db.query(escape`SELECT * FROM users WHERE email = "${rq.email}"`)
    res.status(200).json(user)
}