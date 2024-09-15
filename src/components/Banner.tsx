import React from "react";

function Banner() {
  return (
    <div
      className="py-3 text-center"
      style={{
        background: 'linear-gradient(to right, rgba(252, 214, 255, 0.7), rgba(41, 216, 255, 0.7), rgba(255, 253, 128, 0.7), rgba(248, 154, 191, 0.7), rgba(252, 214, 255, 0.7))',
      }}>
      <div className="container">
        <p>
          <span className="hidden sm:inline">
            A simpler and minimal way to organize your study and your project. -{" "}
          </span>
          <a
            href="#"
            className="underline underline-offset-2 font-medium">
            Download now from the stores
          </a>
        </p>
      </div>
    </div>
  );
}

export default Banner;
