"use client";
import React, { use, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";

const paragraph =
	"In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars. At high tide in the afternoon I watched his guests diving from the tower of his raft, or taking the sun on the hot sand of his beach while his two motor-boats slit the waters of the Sound, drawing aquaplanes over cataracts of foam.";

const words = paragraph.split(" ");

const variants = {
	hidden: {
		opacity: 0,
		scale: 0.9,
		y: 2,
	},
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			duration: 0.1,
		},
	},
};

const Page = () => {
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5, once: true });

	useEffect(() => {
		let interval: NodeJS.Timeout;
		const show = () => {
			controls.start("visible");
			interval = setInterval(async () => {
				await controls.start("hidden");
				controls.start("visible");
			}, 10000);
		};

		if (isInView) {
			show();
		} else {
			controls.start("hidden");
		}

		return () => clearInterval(interval);
	}, [isInView]);

	return (
		<div className='h-full'>
			<div className='h-screen'></div>
			<div className=' h-screen '>
				<motion.p
					initial='hidden'
					animate={controls}
					ref={ref}
					variants={{
						visible: { transition: { staggerChildren: 0.1 } },
						hidden: {},
					}}
					className='max-w-max px-20 text-slate-200 font-extrabold inline-flex flex-wrap text-5xl leading-relaxed'>
					{words.map((word, index) => (
						<motion.span variants={variants} key={index} className='inline-block mr-2  '>
							{word}
						</motion.span>
					))}
				</motion.p>
			</div>
			<div className='h-screen'></div>
		</div>
	);
};

export default Page;
