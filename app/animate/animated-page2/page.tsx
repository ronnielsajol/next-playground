"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
	const root = useRef<HTMLDivElement | null>(null);
	const heroRef = useRef<HTMLDivElement | null>(null);
	const h1Ref = useRef<HTMLHeadingElement | null>(null);
	const extraBoxRef = useRef<HTMLDivElement | null>(null);
	const nextRef = useRef<HTMLElement | null>(null);

	useLayoutEffect(() => {
		if (!root.current || !heroRef.current || !h1Ref.current) return;

		const ctx = gsap.context(() => {
			const exp = gsap.timeline({
				scrollTrigger: {
					trigger: heroRef.current,
					start: "top top",
					end: "+=5000",
					scrub: true,
					markers: true,
					pin: heroRef.current,
				},
			});

			exp.to(
				h1Ref.current,
				{
					scale: 50,
					ease: "none",
				},
				0
			);

			exp.to(
				h1Ref.current,
				{
					opacity: 0,
					ease: "none",
				},
				">-0.1"
			);
		}, root);

		return () => ctx.revert();
	}, []);

	return (
		<div className='relative' ref={root}>
			<section
				ref={heroRef}
				className='absolute top-0 left-0 z-20 w-full min-h-screen flex justify-center items-center bg-white'>
				<h1
					className='text-[14.5vh] font-extrabold tracking-tight text-neutral-900 whitespace-nowrap'
					ref={h1Ref}
					style={{
						transformOrigin: "48.2% 50%",
						willChange: "transform",
						WebkitFontSmoothing: "antialiased",
						MozOsxFontSmoothing: "grayscale",
					}}>
					ENTER THE VOID
				</h1>
			</section>

			<section ref={nextRef} className=' min-h-screen bg-neutral-900 text-white flex items-center justify-center '>
				<div className='max-w-xl px-6'>
					<h2 className='text-3xl font-semibold'>Next section</h2>
					<p className='mt-4 text-white/80'>The hero text scaled up to fill the screen.</p>
				</div>
			</section>
		</div>
	);
}
