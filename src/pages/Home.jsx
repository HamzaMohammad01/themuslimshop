import React from "react";
import Carousal from "../components/Carousal";
import InfoSlider from "../components/InfoSlider";

import star_struck from "../img/star_struck.png";
import shopping_bags from "../img/shopping_bags.png";

export default function Home() {
	const menuStyle =
		"border-2 rounded-xl py-1 w-32 flex items-center justify-center text-text-0 font-accent text-3xl";
	return (
		<div className="bg-black dark:bg-black text-lg flex flex-col text-primary px-10 ml-20">
			<div className="h-svh flex flex-col">
				{/* menu */}
				<ul className="flex space-x-5 mt-5 self-center">
					<li className={menuStyle}>Men</li>
					<li className={menuStyle}>Women</li>
					<li className={menuStyle}>Clothes</li>
					<li className={menuStyle}>Tech</li>
					<li className={menuStyle}>Watch</li>
				</ul>
				{/* Carousal */}
				<Carousal />
			</div>
			{/* must have slider */}
			<InfoSlider />
			<InfoSlider text="Featured" imageSrc={star_struck} />
			<InfoSlider
				addClassName={"lastInfoSlider"}
				text="Recently Bought"
				imageSrc={shopping_bags}
			/>
		</div>
	);
}
