const fs = require("fs");
const mysql = require("mysql2");
require("dotenv").config();

const sql = fs.readFileSync(__dirname + "/seed/seed.sql", "utf-8");

const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	multipleStatements: true // Permite ejecutar varias queries
});

connection.query(sql, (err) => {
	if (err) {
		console.error("❌ Error ejecutando seed:", err);
	} else {
		console.log("🌱 Seed ejecutado correctamente, DB lista.");
	}
	connection.end();
});