"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const Page = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const setFromEvent = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener("mousemove", setFromEvent);

		return () => {
			window.removeEventListener("mousemove", setFromEvent);
		};
	}, []);

	const size = isHovered ? 300 : 30;

	return (
		<main className='flex items-center justify-center h-screen w-screen flex-col'>
			<motion.div
				className='absolute mask'
				animate={{
					WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`,
					WebkitMaskSize: `${size}px`,
				}}
				transition={{ type: "tween", ease: "backOut", duration: 0.5 }}>
				<h1
					className='uppercase text-6xl text-center'
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}>
					not <br />
					found
				</h1>
			</motion.div>
			<div className=''>
				<h1 className='uppercase text-6xl text-center'>
					404 <br /> page
				</h1>
			</div>
		</main>
	);
};

export default Page;
