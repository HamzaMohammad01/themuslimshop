import React from "react";
import "/Users/hamza/Documents/B/Programming Data/the-muslim-shop/src/components/Carousal.jsx";
import apiClient from "../api/client";
import { useNavigate } from "react-router-dom";

export default function Carousal({ data }) {
	const navigate = useNavigate();
	const handleOnClick = (id) => {
		navigate("/listing-details", { state: id });
	};
	return (
		<div>
			<swiper-container
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#83ca44",
					"--swiper-pagination-bullet-inactive-color": "#fff",
					width: "90vmax",
					height: "70svh",
					alignItems: "center",
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
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
							height: "fit-content",
							margin: "auto 0px auto 0px",
							padding: "0vmin 6vmin 0vmin 6vmin",
							position: "relative",
							cursor: "pointer",
						}}
						lazy="true"
						onClick={() => handleOnClick(e._id)}
						key={e._id}
					>
						<img
							src={e.url}
							alt=""
							className="object-cover w-2/3 h-full rounded-xl"
							srcSet={`${e.url}?w=300 300w, ${e.url}?w=600 600w, ${e.url}?w=900 900w`}
						/>
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	);
}
