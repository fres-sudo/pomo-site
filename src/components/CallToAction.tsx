import React from "react";

function CallToAction() {
	return (
		<div className="bg-black text-white py-[72px] text-center sm:py-24">
			<div className="container max-w-2xl relative">
				<h2 className="font-bold text-5xl sm:text-6xl">Get instant access</h2>
				<p className="text-xl text-white/70 mt-5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<form className="mt-10 flex flex-col gpa-2.5 max-w-sm mx-auto sm:flex-row">
					<input
						type="email"
						placeholder="your@email.com"
						className="h-12 bg-white/20 rounded-lg px-5 mb-2 sm:mr-2 font-medium placeholder:text-white/60 sm:flex-1"
					/>
					<button className="bg-white text-black h-12 rounded-lg px-5">
						Get access
					</button>
				</form>
			</div>
		</div>
	);
}

export default CallToAction;
