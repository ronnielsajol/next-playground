"use client";

import React from "react";
import { motion, useMotionValue, animate } from "motion/react";

const Page = () => {
	return (
		<main className='w-screen h-screen flex justify-center items-center'>
			<section className='w-[50vh] h-[50vh] border border-slate-400 flex justify-center items-center'>
				<motion.div
					className='w-3/4 h-3/4 rounded-full bg-yellow-400 will-change-transform overflow-hidden p-5'
					initial={{
						opacity: 0.001,
						transform: "perspective(600px) rotateY(45deg)",
						transformOrigin: "0% 50% 0px",
					}}
					animate={{
						opacity: 1,
						transform: "perspective(600px) rotateY(0deg)",
						transformOrigin: "0% 50% 0px",
					}}
					transition={{
						duration: 0.5,
					}}>
					<svg width='100%' height='100%' viewBox='0 0 2381 988' fill='#0f1115' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M237.5 144C278.455 4.23367 556.572 1.07266 746.884 1.00117C753.487 0.998686 758.222 7.2848 756.472 13.6509L491.521 977.15C490.327 981.491 486.38 984.499 481.879 984.499H13.19C6.5666 984.499 1.65009 978.615 3.43914 972.238C29.728 878.529 198.883 275.788 237.5 144Z'
							stroke='black'
						/>
						<path
							d='M1693.45 841.499C1652.48 981.335 1379.84 987.299 1189.77 987.495C1183.26 987.501 1178.54 981.377 1180.13 975.063L1423.05 8.56226C1424.17 4.11658 1428.16 0.999878 1432.75 0.999878H1917.76C1924.38 0.999878 1929.3 6.88348 1927.51 13.2607C1901.22 106.97 1732.07 709.71 1693.45 841.499Z'
							stroke='black'
						/>
						<path
							d='M853.165 0.999762L1326.67 0.99999C1333.2 0.99999 1337.92 7.16002 1336.29 13.4867L1088.93 976.986C1087.79 981.407 1083.81 984.499 1079.24 984.499H594.045C587.466 984.499 582.679 978.255 584.388 971.902L843.509 8.40267C844.684 4.03522 848.643 0.999758 853.165 0.999762Z'
							stroke='black'
						/>
						<circle cx='2156' cy='226' r='224.5' stroke='black' />
					</svg>
				</motion.div>
			</section>
		</main>
	);
};

export default Page;
