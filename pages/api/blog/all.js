const db = require("../../../lib/db");
const escape = require("sql-template-strings");

// GET USER (email)

module.exports = async (req, res) => {
    const posts = await db.query(escape`SELECT * FROM blog_posts`)
    console.log("below is from api/all")
    console.log(posts)
    res.status(200).json(posts)
}