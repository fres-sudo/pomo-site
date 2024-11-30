
import React from 'react';
import Image from 'next/image'; // For loading avatar
import DottedBackgroundWithContent from '@/components/DottedBackground';

const AboutMePage: React.FC = () => {
  return (
    <div >
      <DottedBackgroundWithContent>
        <div className="text-white flex flex-col flex-grow justify-between items-center relative overflow-hidden py-24 lg:py-32"> {/* Gradients */}
          <div
            aria-hidden="true"
            className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
          >
            <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-indigo-500 via-indigo-800 to-background" />
          </div>
          {/* End Gradients */}
          <div className="relative glassmorphism max-w-5xl mx-4 mb-36">
            <div className="container py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                {/* Avatar */}
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src="/fres-logo-notag.png"
                      alt="Your Avatar"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Title */}
                <div className="mt-5 max-w-2xl">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    About Me
                  </h1>
                </div>

                {/* Introduction */}
                <div className="mt-5 max-w-3xl">
                  <p className="text-md text-white/70">
                    Hi, I’m <span className="text-indigo-400">fres</span>, a passionate developer and the sole maintainer of this open-source project. My goal is to create meaningful software that is free and accessible to everyone.
                  </p>
                  <p className="text-md text-white/70 mt-4">
                    This project is an ongoing effort that I maintain single-handedly. If you enjoy the work and would like to know more about me or my other projects, feel free to check out my <a className='underline underline-offset-2 text-indigo-400' href='https://fres.space' target='_blank' rel='noopener noreferrer'>portfolio</a> or my <a className='underline underline-offset-2 text-indigo-400' href='https://github.com/fres-sudo' target='_blank' rel='noopener noreferrer'>Github</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DottedBackgroundWithContent>
    </div>

  );
};

export default AboutMePage;
