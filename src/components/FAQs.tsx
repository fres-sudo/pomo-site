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
      question: "What is Pomo?",
      answer: "Pomo is an application to organize your study and work session, you can easly manage your project and your task, and you can divide every thing into small sessions that uses pomodoro technique to achive 100% success in your activity.",
    },
    {
      question: "Why would I choose Pomo over other pomodoro technique site / application",
      answer: "Pomo is an advanced tool that makes the task organization process much much easier. There is no free alternatives like Pomo in the market to organize in that seamless way your work. The integration between Schedule page and yout Projects make the work organization much easier",
    },
    {
      question: "Is Pomo free?",
      answer: "Absolutely Pomo is 100% free to use and open source, there is not premium or paid plan, all the feature are for every one forever",
    },

    {
      question: "Can I customize my timer?",
      answer: "For sure! The Pomo Timer is completely customizable, you can decide both focus and start time by going in Profile > Timer Options and choose your favourite time session. You can also reproduce some abckground noise to help you to stay focused all time",
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
