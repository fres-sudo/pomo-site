import React, { ReactNode } from 'react';

const DottedBackgroundWithContent = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative bg-black">
      <div className="dotted-background-radial"></div>
      <div className="relative ">
        {children}
      </div>
    </div>
  );
};

export default DottedBackgroundWithContent;
