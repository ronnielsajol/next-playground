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
		if (!root.current || !heroRef.current || !h1Ref.current || !extraBoxRef.current) return;

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
					"--progress1": 1,
					ease: "none",
				},
				0
			);

			exp.from(
				extraBoxRef.current,
				{
					scaleX: 0,
					ease: "none",
				},
				"-=0.4"
			);
		}, root);

		return () => ctx.revert();
	}, []);

	return (
		<div className='relative' ref={root}>
			<section
				ref={heroRef}
				className='absolute w-full min-h-screen overflow-hidden flex items-center justify-center bg-white'>
				<div
					ref={extraBoxRef}
					className='absolute top-0 left-0 w-full h-full bg-neutral-900  pointer-events-none'
					style={{ transformOrigin: "50% calc(50% - var(--progress1) * 25%)", zIndex: 10 }}
				/>

				<h1
					ref={h1Ref}
					className='text-5xl md:text-[14.5vh] font-extrabold tracking-tight text-neutral-900 whitespace-nowrap'
					style={{
						transformOrigin: "48.2% 50%",
						willChange: "transform",
						transform: "scale(calc(1 + var(--progress1) * 50))",
						WebkitFontSmoothing: "antialiased",
						MozOsxFontSmoothing: "grayscale",
						backfaceVisibility: "hidden",
						WebkitBackfaceVisibility: "hidden",
					}}>
					ENTER THE VOID
				</h1>
			</section>

			<section ref={nextRef} className='min-h-screen bg-neutral-900 text-white flex items-center justify-center '>
				<div className='max-w-xl px-6'>
					<h2 className='text-3xl font-semibold'>Next section</h2>
					<p className='mt-4 text-white/80'>The hero text scaled up to fill the screen.</p>
				</div>
			</section>
		</div>
	);
}
