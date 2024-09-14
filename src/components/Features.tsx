import { CalendarCheck2 } from "lucide-react";
import React from "react";
import Feature from "./Feature";

function Features() {
	const features = [
		{
			title: "Open Source",
			description:
				"The project is open source and it's codebase will be available on github forever. Contributors are welocme ;)",
		},
		{
			title: "What you need",
			description:
				"Pomo is tailored on your needs, we ran some benchmark on real people to enusure to give the best feature.",
		},
		{
			title: "Feature 3",
			description: "Description of feature 3",
		},
	];

	return (
		<div className="bg-black text-white py-[72px] sm:py-24">
			<div className="container">
				<h2 className="text-center font-bold text-5xl sm:text-6xl">
					Everything you need
				</h2>
				<div className="max-w-xl mx-auto">
					<p className="text-center mt-5 text-xl text-white/70">
						Enjoy customizable list, team work tools, and smart tracking all in
						one place. Set tasks, get reminders, and see your progress simply
						and quickly.
					</p>
				</div>
				<div className="mt-16 flex flex-col sm:flex-row gap-4">
					{features.map(({ title, description }) => (
						<Feature
							key={title}
							title={title}
							description={description}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default Features;
