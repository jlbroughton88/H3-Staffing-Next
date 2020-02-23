const db = require("../../../lib/db");
const escape = require("sql-template-strings");

// ADD BLOG POST

module.exports = async (req, res) => {
    let rb = req.body;
    const post = await db.query(escape`INSERT INTO blog_posts (uid, user_uid, author, title, blog_text, date_created, time_created) VALUES ("${rb.uid}", "${rb.user_uid}", "${rb.author}", "${rb.title}", "${rb.blog_text}", "${rb.date_created}", "${rb.time_created}"`)
    res.status(200).json(post)
}