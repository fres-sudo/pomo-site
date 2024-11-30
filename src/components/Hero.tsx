"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GradualSpacing } from "./ui/gradual-spacing";
function Hero() {
  return (
    <div className="bg-balck text-white bg-[linear-gradient(to_bottom,#000,#000,#000,#6255F6_98%)] relative overflow-clip py-[72px] sm:py-24  ">
      {
        <div className="absolute pb-12 h-[375px] w-[750px] sm:w-[1536px] sm:h-[786px] lg:w-[2400px] lg:h-[1200] rounded-[100%]  bg-black left-1/2 -translate-x-1/2 border border-[#a097e9] bg-[radial-gradient(closest-side,#000_82%,#6255F6)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      }
      <div className="container relative">
        <motion.div
          initial={{ y: "-300%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 90 }}>
          <div className="flex items-center justify-center">
            <a
              href="/changelog"
              className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30">
              <span className="bg-[linear-gradient(to_right,#6255F6,#7A6DF8,#9386FA,#ACA0FC,#C5B9FE)] text-transparent bg-clip-text [-webkit-background-clip:text]">
                Version 1.0 is here{" "}
              </span>
              <span className="inline-flex items-center gap-1">
                Read more <ArrowRight className="h-4 w-4" />{" "}
              </span>
            </a>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-center mt-8 mb-24">
          <div className="flex  items-center justify-center ">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-6">
              <div className="flex flex-col items-center justify-center text-center">
                <GradualSpacing
                  className="font-display text-center text-6xl sm:text-5xl xl:text-8xl font-bold tracking-[-0.3rem] text-white md:leading-[1rem]"
                  text="Your"
                />
                <GradualSpacing
                  className="font-display text-center text-6xl sm:text-5xl xl:text-8xl font-bold -tracking-wider  text-[#6255F6] md:leading-[5rem]"
                  text="Pomodoro"
                />
                <GradualSpacing
                  className="font-display text-center text-6xl sm:text-5xl xl:text-8xl font-bold -tracking-wider text-white  md:leading-[1rem]"
                  text="Buddy"
                />
              </div>
              <p className="text-center max-w-md text-sm md:text-md lg:text-lg font-thin ">
                <span className="underline underline-offset-2 decoration-wavy decoration-white/50">Free and Open Source</span> mobile application to boost your study and work with pomodoro sessions.
                Easy manage Projects and Tasks and split them in Pomodoro sessions.
              </p>
              <div className="flex justify-center mt-8 gap-x-4">
                <motion.a
                  href="/"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0, rotateX: 1080 }}
                  transition={{ duration: 1.2, delay: 0.3 }}>
                  <Image
                    src={"app-store.svg"}
                    alt="app-store"
                    width={200}
                    height={200}
                  />
                </motion.a>
                <motion.a
                  href="/"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0, rotateX: 1080 }}
                  transition={{ duration: 1.2, delay: 0.8 }}>
                  <Image
                    src={"google-play.svg"}
                    alt="google-play"
                    width={200}
                    height={200}
                  />
                </motion.a>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ x: "140%" }}
            className="mt-10 md:mt-0"
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 90 }}>
            <Image
              src={"/main-mobile.png"}
              alt="main-mobile"
              width={700}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
