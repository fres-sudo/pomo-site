"use client";
import clsx from "clsx";
import { MinusIcon, PlusIcon } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			key={answer}
			className="py-7 border-b border-white/30"
			onClick={() => setIsOpen(!isOpen)}>
			<div className="flex items-center ">
				<span className="flex-1 text-lg font-bold">{question}</span>
				{!isOpen ? <PlusIcon /> : <MinusIcon />}
			</div>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{
							opacity: 0,
							height: 0,
							marginTop: 0,
						}}
						animate={{
							opacity: 1,
							height: "auto",
							marginTop: "16px",
						}}
						exit={{
							opacity: 0,
							height: 0,
							marginTop: 0,
						}}>
						{answer}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

function FAQs() {
	const items = [
		{
			question: "Question 1",
			answer: "Answer 1",
		},
		{
			question: "Question 1",
			answer: "Answer 1",
		},
		{
			question: "Question 1",
			answer: "Answer 1",
		},
		{
			question: "Question 1",
			answer: "Answer 1",
		},
	];
	return (
		<div className="bg-black text-white bg-gradient-to-b from-[#6255F6] to-black py-[72px] sm:py-24">
			<div className="container">
				<h2 className="text-center text-5xl sm:text-6xl sm:max-w-3xl mx-auto font-bold">
					Frequently Asked Questions
				</h2>
				<div className="mt-12 max-w-2xl mx-auto">
					{items.map(({ question, answer }) =>
						AccordionItem({ question, answer })
					)}
				</div>
			</div>
		</div>
	);
}

export default FAQs;
