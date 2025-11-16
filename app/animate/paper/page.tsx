"use client";

import React from "react";
import { motion } from "motion/react";

const Page = () => {
	return (
		<main className='w-screen h-screen flex justify-center items-center' style={{ perspective: "2000px" }}>
			<section
				className='w-[90vw] h-[90vh] sm:w-[40vw] sm:h-[80vh] flex flex-col relative'
				style={{ transformStyle: "preserve-3d" }}>
				{/* Top fold */}
				<motion.div
					initial={{ rotateX: -180 }}
					animate={{ rotateX: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
					style={{
						transformOrigin: "bottom",
						transformStyle: "preserve-3d",
						boxShadow: "inset 0 10px 20px -10px rgba(0, 0, 0, 0), inset 0 -10px 20px -20px rgba(0, 0, 0, 0.3)",
					}}
					className='text-black/30 flex-1  bg-[#eee7d7] flex items-center justify-center text-4xl font-bold'>
					1
				</motion.div>

				{/* Middle section - stays flat */}
				<motion.div
					className='text-black/30 flex-1  bg-[#eee7d7] flex items-center justify-center text-4xl font-bold relative'
					style={{
						boxShadow: "inset 0 10px 20px -20px rgba(0, 0, 0, 0.3), inset 0 -10px 20px -20px rgba(0, 0, 0, 0.3)",
					}}>
					2
				</motion.div>

				{/* Bottom fold */}
				<motion.div
					initial={{ rotateX: 180 }}
					animate={{ rotateX: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
					style={{
						transformOrigin: "top",
						transformStyle: "preserve-3d",
						boxShadow: "inset 0 10px 20px -20px rgba(0, 0, 0, 0.3), inset 0 -10px 20px -20px rgba(0, 0, 0, 0)",
					}}
					className='text-black/30 flex-1 bg-[#eee7d7] flex items-center justify-center text-4xl font-bold'>
					3
				</motion.div>
			</section>
		</main>
	);
};

export default Page;
