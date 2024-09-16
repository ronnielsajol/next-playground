import { mysqlTable, serial, timestamp, varchar } from "drizzle-orm/mysql-core";

export const messages = mysqlTable("messages", {
	id: serial("id").primaryKey(),
	message: varchar("message", { length: 256 }),
	created_at: timestamp("created_at"),
});
