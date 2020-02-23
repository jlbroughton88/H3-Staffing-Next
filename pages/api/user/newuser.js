const db = require("../../../lib/db");
const escape = require("sql-template-strings");

// POST (Add user)

module.exports = async (req, res) => {
    let rq = req.body;
    const user = await db.query(escape`INSERT INTO users (uid, email, given_name, family_name, nickname) VALUES ("${rq.uid}", "${rq.email}", "${rq.given_name}", "${rq.family_name}", "${rq.nickname}")`)
    res.status(200).json(user)
}