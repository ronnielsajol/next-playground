"use client";

import { useScroll, useTransform, motion, ScrollMotionValues, MotionValue } from "motion/react";
import React, { useRef } from "react";

const Page = () => {
	const container = useRef(null);
	const { scrollYProgress }: { scrollYProgress: MotionValue<number> } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});

	return (
		<div className='relative h-[200vh]' ref={container}>
			<Section1 scrollYProgress={scrollYProgress} />
			<Section2 scrollYProgress={scrollYProgress} />
		</div>
	);
};

export default Page;

const Section1 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
	const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

	return (
		<motion.div
			style={{ scale, rotate }}
			className='sticky top-0 h-screen bg-slate-500 text-[3.5vw] flex flex-col items-center justify-center pb-[10vh]'>
			<p>Page 1</p>
		</motion.div>
	);
};

const Section2 = ({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) => {
	const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

	return (
		<motion.div
			style={{ scale, rotate }}
			className='h-screen text-[3.5vw] flex flex-col items-center justify-center relative bg-lime-700'>
			<p>Page 2</p>
		</motion.div>
	);
};
