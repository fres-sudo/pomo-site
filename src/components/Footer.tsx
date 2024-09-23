import { GithubIcon, Linkedin, Code2 } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="flex gap-x-8">
            <div className="text-center text-white/70">
              © 2024 fres.space - All rights reserved.
            </div>
            <a className="text-center text-white/70" href="/privacy">
              Privacy Policy
            </a>
            <a className="text-center text-white/70" href="/terms">
              Terms And Conditions
            </a>

          </div>           <ul className="flex justify-center gap-4">
            <li>
              <GithubIcon />
            </li>
            <li>
              <Linkedin />
            </li>
            <li>
              <Code2 />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
