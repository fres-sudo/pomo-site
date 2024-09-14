"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { a } from "framer-motion/client";

function ProductShowcase() {
	const appImage = useRef<HTMLImageElement>(null);
	const { scrollYProgress } = useScroll({
		target: appImage,
		offset: ["start end", "end end"],
	});

	const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0]);
	return (
		<div className="bg-black text-white bg-gradient-to-t from-black to-[#6255F6] py-[72px]">
			<div className="container">
				<h2 className="text-center text-5xl sm:text-6xl font-bold">
					Intuitive Interface
				</h2>
				<div className="max-w-xl mx-auto">
					<p className="text-xl text-center text-white/70 mt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<motion.div
					style={{
						opacity: opacity,
						rotateX: rotateX,
						transformPerspective: "800px",
					}}>
					<Image
						ref={appImage}
						src=""
						className="mt-14"
						alt="product"></Image>
				</motion.div>
			</div>
		</div>
	);
}

export default ProductShowcase;
