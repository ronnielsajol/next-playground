import { Request, Response } from "express";
import { db } from "../db";
import { messages } from "../db/schema/messages";

const getMessage = async (req: Request, res: Response) => {
	try {
		const allMessages = await db.select().from(messages);

		return res.status(200).json({ length: allMessages.length, messages: allMessages });
	} catch (error) {
		console.log("Error getting messages", error);
		return res.status(500).json({ error: "server_error", message: "Unable to get messages" });
	}
};

export default getMessage;
