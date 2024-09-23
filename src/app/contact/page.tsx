
import React from 'react';
import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DottedBackgroundWithContent from '@/components/DottedBackground';

const ContactPage: React.FC = () => {
  return (
    <DottedBackgroundWithContent>
      {/* Hero */}
      <div className="flex flex-col min-h-full pb-5">
        <div className="text-white flex-grow flex flex-col items-center justify-between relative overflow-hidden py-24 lg:py-32">
          {/* Gradients */}
          <div
            aria-hidden="true"
            className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
          >
            <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-indigo-500 via-indigo-800 to-background" />
          </div>
          {/* End Gradients */}
          <div className="relative glassmorphism max-w-3xl mx-4 ">
            <div className="container py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                {/* Title */}
                <div className="mt-5 max-w-2xl">
                  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Contact Us
                  </h1>
                </div>
                {/* End Title */}
                <div className="mt-5 max-w-3xl">
                  <p className="text-md text-white/70">
                    If you have any questions that are not in the <a className="underline underline-offset-2" href="/#faq">FAQs</a> feel free to contact us at any moment. Also if you have some feedback or some feature request this is the right spot for you.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DottedBackgroundWithContent>
  );
};

export default ContactPage;

