"use client";

import React from "react";
import { motion, useMotionValue, animate } from "motion/react";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

const Page = () => {
	let [ref, { height }] = useMeasure();
	const yTranslation = useMotionValue(0);
	console.log(height);

	useEffect(() => {
		if (height === 0) return; // Avoid animating if height is not measured yet

		let controls;
		let finalPosition = -height * 2;

		controls = animate(yTranslation, [finalPosition, 0], {
			ease: "linear",
			duration: 10,
			repeat: Infinity,
			repeatType: "loop",
			repeatDelay: 0,
		});

		return () => controls.stop();
	}, [yTranslation, height]);

	return (
		<main className='w-screen h-screen flex justify-center items-center'>
			<section className='w-[50vh] h-[50vh] border border-slate-400 relative'>
				<motion.div
					className='absolute left-0 right-0 top-0 bg-grid-white/[0.2] w-full h-full '
					ref={ref}
					style={{ backgroundPositionY: yTranslation }}>
					<div className='bg-black'>🌸</div>
				</motion.div>
			</section>
		</main>
	);
};

export default Page;
