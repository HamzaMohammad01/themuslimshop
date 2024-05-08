import React from "react";
import hundred_points from "../img/hundred_points.png";

export default function InfoSlider({
	text = "Muslim must-haves",
	addClassName,
	imageSrc = hundred_points,
}) {
	const data = [
		{ url: "https://source.unsplash.com/macbook-y0_vFxOHayg" },
		{
			url: "https://source.unsplash.com/apple-products-on-table-tdMu8W9NTnY",
		},
		{
			url: "https://source.unsplash.com/black-macbook-near-black-iphone-7-plus-and-black-apple-watch-HY3l4IeOc3E",
		},
		{
			url: "https://source.unsplash.com/apple-products-on-table-tdMu8W9NTnY",
		},
		{ url: "https://source.unsplash.com/macbook-y0_vFxOHayg" },
	];
	return (
		<div className={`${addClassName} mt-10`}>
			{/* title */}
			<div className="flex flex-row items-center">
				<div className="text-primary text-6xl font-accent">{text}</div>
				<img src={imageSrc} alt="" className="h-32" />
			</div>
			<swiper-container
				style={{
					"--swiper-navigation-color": "#83ca44",
					"--swiper-pagination-color": "#83ca44",
					// width: "20vmax",
					maxWidth: "90vw",
					marginRight: "2vmin",
					borderRadius: "2vmin",
				}}
				pagination-clickable="true"
				slides-per-view={3}
				navigation="true"
				className="mySwiper"
			>
				{data.map((e) => (
					<swiper-slide className="border-2 border-primary w-1/4 h-1/3 rounded-xl bg-clip-border mr-5">
						<div
							style={{
								backgoundClip: "clip",
								marginRight: "5px",
							}}
						>
							<img
								src={e.url}
								alt=""
								className="object-none h-96 rounded-xl"
							/>
						</div>
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	);
}
