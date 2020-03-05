const db = require("../../../lib/db");
const escape = require("sql-template-strings");

// GET BLOG POST
module.exports = async (req, res) => {
    const post = await db.query(escape`SELECT * FROM blog_posts WHERE uid = ${req.query.uid}`);
    console.log(post)
    res.status(200).json(post);
};
 