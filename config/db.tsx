import mysql from "serverless-mysql"


export const Sql = mysql({
    config: {
        host: "localhost",
        user: "root",
        // password: "password",
        port: 3306,
        database: "padel",
    },
})
