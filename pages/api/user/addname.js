const db = require("../../../lib/db");
const escape = require("sql-template-strings");

// GET (update name)

module.exports = async (req, res) => {
    let rqp = req.params;
    const name = await db.query(escape`UPDATE users SET given_name="${rqp.given_name}", family_name="${rqp.family_name}" WHERE email = "${rqp.email}"`)
    res.status(200).json(name)
}