import React from "react";
import "/Users/hamza/Documents/B/Programming Data/the-muslim-shop/src/components/Carousal.jsx";

export default function Carousal() {
	const data = [
		{
			url: "https://source.unsplash.com/slightly-opened-silver-macbook-mP7aPSUm7aE",
		},
		{ url: "https://source.unsplash.com/macbook-y0_vFxOHayg" },
		{
			url: "https://source.unsplash.com/black-macbook-near-black-iphone-7-plus-and-black-apple-watch-HY3l4IeOc3E",
		},
		{
			url: "https://source.unsplash.com/apple-products-on-table-tdMu8W9NTnY",
		},
		{ url: "https://source.unsplash.com/turned-on-ipad-Im8ylpB8SpI" },
	];
	return (
		<div>
			<swiper-container
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#83ca44",
					"--swiper-pagination-bullet-inactive-color": "#fff",
					width: "90vmax",
					maxWidth: "90vw",
					marginTop: "4vmin",
					marginRight: "2vmin",
					border: "2px solid #83ca44",
					borderRadius: "2vmin",
				}}
				pagination-clickable="true"
				navigation="true"
				className="mySwiper"
			>
				{data.map((e) => (
					<swiper-slide
						style={{
							width: "100%",
							height: "80vmin",
							justifyContent: "center",
							padding: "0vmin 6vmin 0vmin 6vmin",
							display: "flex",
							alignItems: "center",
							position: "relative",
						}}
						lazy="true"
					>
						<img src={e.url} alt="" />
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	);
}
