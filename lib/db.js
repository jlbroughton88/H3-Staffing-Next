const mysql = require("serverless-mysql");

const db = mysql({
    config: {
        host: process.env.H3_HOST,
        database: process.env.H3_DATABASE,
        user: process.env.H3_USERNAME,
        password: process.env.H3_PASSWORD
    }
})

exports.query = async query => {
    try {
        const results = await db.query(query);
        console.log("Results below...")
        console.log(results)
        await db.end()
        return results
    } catch (error) {
        console.log("ERROR FROM DB BELOW");
        console.log(error)
        return { error }
    }
}