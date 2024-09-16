import { Request, Response } from "express";
import { db } from "../db";
import { messages } from "../db/schema/messages";

const createMessage = async (req: Request, res: Response) => {
	const { message }: { message: string } = req.body;

	try {
		await db.insert(messages).values({ message: message });

		return res.status(201).json({
			message: "Message added succesfully",
		});
	} catch (error) {
		console.log("Error creating message", error);
		return res.status(500).json({ error: "server error", message: "Unable to add" });
	}
};

export default createMessage;
