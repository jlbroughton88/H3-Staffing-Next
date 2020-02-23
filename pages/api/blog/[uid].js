const db = require("../../../lib/db");
const escape = require("sql-template-strings");

// GET BLOG POST

module.exports = async (req, res) => {
    let rq = req.params;
    const post = await db.query(escape`SELECT * FROM blog_posts WHERE uid = "${rq.uid}"`)
    res.status(200).json(post)
}