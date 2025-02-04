"use client";

import DragElements from "@/components/DragElements";
import Image from "next/image";
import React from "react";
import useScreenSize from "@/hooks/use-screen-size";

const images = ["/1.jpg", "/2.jpeg", "/3.jpeg"];

const randomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Page: React.FC = () => {
	const screenSize = useScreenSize();

	return (
		<main className='w-screen h-screen flex justify-center items-center'>
			<DragElements dragMomentum={true} className='flex justify-center items-center overflow-hidden'>
				{images.map((url, index) => {
					const rotation = randomInt(-10, 10);
					const width = screenSize.lessThan(`md`) ? randomInt(400, 450) : randomInt(450, 500);
					const height = screenSize.lessThan(`md`) ? randomInt(330, 380) : randomInt(380, 410);
					console.log(width, height);

					return (
						<div
							key={index}
							className={`flex items-start justify-center bg-white shadow-2xl p-4`}
							style={{ transform: `rotate(${rotation}deg)`, width: `${width}px`, height: `${height}px` }}>
							<div
								className='relative overflow-hidden'
								style={{
									width: `${width - 4}px`,
									height: `${height - 30}px`,
								}}>
								<Image src={url} fill alt='test' draggable={false} className='object-cover' />
							</div>
						</div>
					);
				})}
			</DragElements>
		</main>
	);
};

export default Page;
