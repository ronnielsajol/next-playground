"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
	const root = useRef<HTMLDivElement | null>(null);
	const heroRef = useRef<HTMLElement | null>(null);
	const h1Ref = useRef<HTMLHeadingElement | null>(null);
	const nextRef = useRef<HTMLElement | null>(null);

	useLayoutEffect(() => {
		if (!root.current || !heroRef.current || !h1Ref.current || !nextRef.current) return;

		const ctx = gsap.context(() => {
			const hero = heroRef.current!;
			const h1 = h1Ref.current!;
			const next = nextRef.current!;

			// Make sure scaling doesn't reflow layout
			gsap.set(h1, {
				transformOrigin: "50% 50%",
				willChange: "transform",
			});

			// If you want the hero to "hold" while the text grows, pin it:
			gsap
				.timeline({
					scrollTrigger: {
						trigger: hero,
						start: "top top",
						end: () => `+=${window.innerHeight * 1.2}`, // adjust feel
						scrub: true,
						pin: true,
						anticipatePin: 1,
					},
				})
				.to(
					h1,
					{
						// this is the core: the text itself expands
						scale: 50, // try 10–30 depending on your font/word length
						ease: "none",
					},
					0
				)
				.to(
					h1,
					{
						// optional: tighten spacing or tweak as it grows
						letterSpacing: "-0.06em",
						ease: "none",
					},
					0
				);

			// // Optional: when next section is reached, you can fade or keep it
			// gsap.to(h1, {
			// 	opacity: 0,
			// 	scrollTrigger: {
			// 		trigger: next,
			// 		start: "top 60%",
			// 		end: "top 20%",
			// 		scrub: true,
			// 	},
			// });
		}, root);

		return () => ctx.revert();
	}, []);

	return (
		<div ref={root}>
			<section ref={heroRef} className='relative min-h-screen overflow-hidden flex items-center justify-center bg-white'>
				<h1 ref={h1Ref} className='text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900'>
					YOUR HEADER
				</h1>
			</section>

			<section ref={nextRef} className='min-h-screen bg-neutral-900 text-white flex items-center justify-center'>
				<div className='max-w-xl px-6'>
					<h2 className='text-3xl font-semibold'>Next section</h2>
					<p className='mt-4 text-white/80'>The hero text scaled up to fill the screen.</p>
				</div>
			</section>
		</div>
	);
}
