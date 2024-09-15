
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DottedBackgroundWithContent from '@/components/DottedBackground';
import Changelog from '@/components/ChangeLog';


const changelogEntries = [
  {
    version: '1.1.0',
    date: 'September 12, 2024',
    changes: [
      { type: '✨', description: 'Added dark mode support for the entire application.' },
      { type: '🐛', description: 'Fixed issue where the navigation bar would not collapse on mobile devices.' },
      { type: '💡', description: 'Improved the performance of the dashboard page by optimizing API calls.' },
    ],
  },
  {
    version: '1.0.0',
    date: 'September 1, 2024',
    changes: [
      { type: '🎉', description: 'Initial release with core features like user authentication, dashboard, and project management.' },
      { type: '📦', description: 'Integrated third-party APIs for enhanced data synchronization.' },
      { type: '🔧', description: 'Setup CI/CD pipelines for continuous deployment.' },
    ],
  },
];

const ChangelogPage: React.FC = () => {
  return (
    <DottedBackgroundWithContent>
      <Navbar />
      <div className="text-white h-full flex flex-col justify-between relative overflow-hidden py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"

        >
          <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-indigo-500 via-indigo-800 to-background" />
        </div>
        <div className="relative z-10 flex-grow">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Changelog
                </h1>
              </div>
              <div className="mt-5 max-w-3xl">
                <p className="text-md text-white/70">
                  Stay updated with the latest features, improvements, and bug fixes.
                </p>
              </div>
            </div>

            {/* Changelog Entries */}
            <Changelog entries={changelogEntries} />
          </div>
        </div>
        <Footer />
      </div>
    </DottedBackgroundWithContent>
  );
};

export default ChangelogPage;
