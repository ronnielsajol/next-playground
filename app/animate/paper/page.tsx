"use client";

import React from "react";
import { motion } from "motion/react";

const Page = () => {
	return (
		<main className='w-screen h-screen flex justify-center items-center' style={{ perspective: "2000px" }}>
			<motion.section
				initial={{ boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)" }}
				animate={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
				transition={{ duration: 0.4, ease: "easeOut", delay: 1.3 }}
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
						zIndex: 10,
					}}
					className='flex-1 relative'>
					{/* Front face */}
					<div
						className='absolute inset-0 bg-[#eee7d7]'
						style={{
							backfaceVisibility: "hidden",
							boxShadow: "inset 0 10px 20px -10px rgba(0, 0, 0, 0), inset 0 -10px 20px -20px rgba(0, 0, 0, 0.3)",
						}}>
						{/* Top third of content */}
						<div className='absolute inset-0 flex flex-col items-start justify-start text-black px-8 pt-8'>
							<h1 className='text-4xl font-bold mb-8'>Title goes here</h1>
							<p className='text-lg leading-loose '>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis velit maxime reprehenderit voluptatibus
								vitae debitis saepe maiores numquam eaque magnam, facilis consequatur amet aliquid pariatur, suscipit nisi praesentium
								aperiam?
							</p>
						</div>
					</div>
					{/* Back face */}
					<div
						className='absolute inset-0 bg-[#d5cdb7]'
						style={{
							backfaceVisibility: "hidden",
							transform: "rotateX(180deg)",
							boxShadow: "inset 0 10px 20px -10px rgba(0, 0, 0, 0.3), inset 0 -10px 20px -20px rgba(0, 0, 0, 0)",
						}}
					/>
				</motion.div>

				{/* Middle section - stays flat */}
				<div
					className='flex-1 bg-[#eee7d7] relative'
					style={{
						boxShadow: "inset 0 10px 20px -20px rgba(0, 0, 0, 0.3), inset 0 -10px 20px -20px rgba(0, 0, 0, 0.3)",
						zIndex: 1,
					}}>
					{/* Middle third of content */}
					<div className='absolute inset-0 flex flex-col items-start justify-start text-black px-8'>
						<p className='text-lg leading-loose'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus officiis, dicta recusandae, voluptatem officia
							accusantium quam commodi similique ut numquam saepe. Molestiae at error ex esse molestias rem harum pariatur? Obcaecati
							laudantium qui maiores sint quidem, delectus ad omnis! Eius atque, sapiente culpa at vitae deleniti ratione explicabo
							nemo aperiam illum earum ducimus quod iusto, enim excepturi omnis, sint quidem.
						</p>
					</div>
				</div>

				{/* Bottom fold */}
				<motion.div
					initial={{ rotateX: 180 }}
					animate={{ rotateX: 0 }}
					transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
					style={{
						transformOrigin: "top",
						transformStyle: "preserve-3d",
						zIndex: 10,
					}}
					className='flex-1 relative'>
					{/* Front face */}
					<div
						className='absolute inset-0 bg-[#eee7d7]'
						style={{
							backfaceVisibility: "hidden",
							boxShadow: "inset 0 10px 20px -20px rgba(0, 0, 0, 0.3), inset 0 -10px 20px -20px rgba(0, 0, 0, 0)",
						}}>
						{/* Bottom third of content */}
						<div className='absolute inset-0 flex flex-col items-start justify-end text-black px-8 pb-8'>
							<h1>Footer Section</h1>
						</div>
					</div>
					{/* Back face */}
					<div
						className='absolute inset-0 bg-[#d5cdb7]'
						style={{
							backfaceVisibility: "hidden",
							transform: "rotateX(180deg)",
							boxShadow: "inset 0 10px 20px -20px rgba(0, 0, 0, 0), inset 0 -10px 20px -20px rgba(0, 0, 0, 0.3)",
						}}
					/>
				</motion.div>
			</motion.section>
		</main>
	);
};

export default Page;
