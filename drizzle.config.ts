import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./app/db/schema",
	out: "./drizzle",
	dbCredentials: {
		host: process.env.DB_HOST || "localhost", // Provide a default or handle the error
		user: process.env.DB_USER || "root",
		password: process.env.DB_PASSWORD || "",
		database: process.env.DB_NAME || "next_playground",
	},
	dialect: "mysql", // 'postgresql' | 'mysql' | 'sqlite'
});
