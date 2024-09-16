"use client";

import { get } from "http";
import { useState } from "react";
import getMessage from "./controllers/getMessage";

export default function Home() {
	const [messages, setMessages] = useState([]);

	return (
		<main className='min-w-full h-50 flex justify-center '>
			<div className='border w-[50vw] flex justify-center border-emerald-500 p-6 flex-col items-center gap-4'>
				<h1>Messages</h1>
				<div className=' flex gap-2 w-full'>
					<input type='text' className='border-2 rounded-md h-10 w-full text-gray-900 p-2' />
					<input type='button' value='Submit' className='border-2 border-slate-100 w-[10vh] p-2 rounded-md' />
					<div>HELLO, SHANE</div>
					<div></div>
				</div>
			</div>
		</main>
	);
}
