import React from "react";
import appicon from "../../public/appicon.png";
import Image from "next/image";
import { HamIcon, Menu } from "lucide-react";
function Navbar() {
	return (
		<div className="bg-black">
			<div className="px-4">
				<div className="py-4 flex items-center justify-between">
					<div className="relative">
						<div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C3F0B1,#2FD8FE)] blur-md"></div>
						<Image
							src={appicon}
							alt="appicon"
							className="h-12 w-12 rounded-xl relative"
						/>
					</div>
					<div className="border border-white border-opacity-30 h-10 w-10 inline-flex items-center justify-center rounded-lg sm:hidden">
						<Menu className="text-white" />
					</div>{" "}
					<nav className="gap-6 items-center hidden sm:flex">
						<a
							href="#"
							className="text-white hover:text-opacity-100 transition text-opacity-60">
							About
						</a>
						<a
							href="#"
							className="text-white hover:text-opacity-100 transition text-opacity-60">
							Features
						</a>
						<a
							href="#"
							className="text-white hover:text-opacity-100 transition text-opacity-60">
							Updates
						</a>
						<a
							href="#"
							className="text-white hover:text-opacity-100 transition text-opacity-60">
							Help{" "}
						</a>
						<a
							href="#"
							className="text-white hover:text-opacity-100 transition text-opacity-60">
							Customers
						</a>
						<button className="bg-white py-2 px-4 rounded-lg">
							Get for free
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
