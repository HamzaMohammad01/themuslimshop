import React, { useEffect, useState } from "react";
import Carousal from "../components/Carousal";
import InfoSlider from "../components/InfoSlider";

import star_struck from "../img/star_struck.png";
import shopping_bags from "../img/shopping_bags.png";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { getHomeItems } from "../api/home";
import Spinner from "../components/Spinner";
import Menu from "../components/Menu";
import Title from "../components/Title";
import Footer from "../components/Footer";

export default function Home() {
	const [data, setData] = useState(null);

	useEffect(() => {
		loadHomeItems();
	}, []);

	const loadHomeItems = async () => {
		try {
			const response = await getHomeItems();
			setData(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	return data ? (
		<>
			<Title />
			<Navbar />
			<div className="text-lg flex flex-col ml-20 xs:ml-0 text-primary px-10">
				<div className=" flex flex-col items-center">
					{/* menu */}
					<Menu />
					<Search otherStyles={"sm:mt-5"} />
					{/* Carousal */}
					<Carousal data={data.hero} />
				</div>
				{/* must have slider */}
				<InfoSlider data={data.must_haves} />
				<InfoSlider
					text="Featured"
					imageSrc={star_struck}
					data={data.featured}
				/>
				<InfoSlider
					addClassName={"lastInfoSlider"}
					text="Recently Bought"
					imageSrc={shopping_bags}
					data={data.recently_bought}
				/>
			</div>
			<Footer />
		</>
	) : (
		<Spinner />
	);
}
