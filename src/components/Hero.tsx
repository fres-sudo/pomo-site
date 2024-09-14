"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
function Hero() {
	return (
		<div className="bg-balck text-white bg-[linear-gradient(to_bottom,#000,#0A0449_34%,#3625F3_55%,#A286F9_82%)] relative overflow-clip py-[72px] sm:py-24  ">
			<div className="absolute pb-12 h-[375px] w-[750px] sm:w-[1536px] sm:h-[786px] lg:w-[2400px] lg:h-[1200] rounded-[100%]  bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

			<div className="container relative">
				<div className="flex items-center justify-center">
					<a
						href="#"
						className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
						<span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
							Version 1.0 is here{" "}
						</span>
						<span className="inline-flex items-center gap-1">
							Read More <ArrowRight className="h-4 w-4" />{" "}
						</span>
					</a>
				</div>
				<div className="flex justify-center mt-8">
					<div className="inline-flex relative">
						<h1 className="text-7xl sm:text-9xl font-bold text-center inline-flex">
							Your <br />
							Pomodoro <br />
							Buddy
						</h1>
						<motion.div
							className="absolute right-[576px] top-[108px] hidden sm:inline"
							drag
							dragSnapToOrigin>
							<Image
								src="/target_vertical.png"
								alt=""
								height="200"
								width="200"
								className="max-w-none"
								draggable="false"
							/>
						</motion.div>
						<motion.div
							className="absolute top-[56px] left-[598px] hidden sm:inline"
							drag
							dragSnapToOrigin>
							<Image
								src="/clock.png"
								alt="cock"
								height="200"
								width="200"
								className="max-w-none"
								draggable="false"
							/>
						</motion.div>
					</div>
				</div>
				<div className="flex justify-center">
					<p className="text-center text-xl mt-8 max-w-md">
						Celebrate te joy of accomplishemnt with an app deisgned to track
						progress, motivate yout efforts, and celebrate your success.
					</p>
				</div>
				<div className="flex justify-center mt-8 gap-x-4">
					<a href="/">
						<Image
							src={"app-store.svg"}
							alt="app-store"
							width={200}
							height={200}
						/>
					</a>
					<a>
						<Image
							src={"google-play.svg"}
							alt="app-store"
							width={200}
							height={200}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Hero;
