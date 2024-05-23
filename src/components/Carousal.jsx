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
							width: "100%",
							height: "fit-content",
							justifyContent: "center",
							margin: "auto 0px auto 0px",
							padding: "0vmin 6vmin 0vmin 6vmin",
							display: "flex",
							alignItems: "center",
							position: "relative",
							cursor: "pointer",
						}}
						lazy="true"
						onClick={() => handleOnClick(e._id)}
						key={e._id}
					>
						<img
							src={`${apiClient
								.getBaseURL()
								.replace("api/", "")}${e.url}`}
							alt=""
							className="rounded-2xl my-auto"
						/>
					</swiper-slide>
				))}
			</swiper-container>
		</div>
	);
}
