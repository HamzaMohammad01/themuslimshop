import React from "react";
import hundred_points from "../img/hundred_points.png";
import apiClient from "../api/client";
import { useNavigate } from "react-router-dom";

export default function InfoSlider({
	text = "Muslim must-haves",
	addClassName,
	imageSrc = hundred_points,
	data,
}) {
	const navigate = useNavigate();
	const handleOnClick = (id) => {
		navigate("/listing-details", { state: id });
	};
	return (
		<div className={`${addClassName} mt-10`}>
			{/* title */}
			<div className="flex flex-row items-center">
				<div className="text-primary text-6xl font-accent xs:text-4xl">
					{text}
				</div>
				<img src={imageSrc} alt="" className="h-32 xs:h-28" />
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
				breakpoints={JSON.stringify({
					350: {
						slidesPerView: 1,
					},
					868: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1260: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				})}
			>
				{data.map((e) => (
					<swiper-slide
						className="border-2 border-primary w-1/4 h-1/3 rounded-xl bg-clip-border mr-5 cursor-pointer"
						onClick={() => handleOnClick(e._id)}
						key={e._id}
					>
						<div
							style={{
								backgoundClip: "clip",
								marginRight: "5px",
							}}
						>
							<img
								src={`${apiClient
									.getBaseURL()
									.replace("api/", "")}${e.url}`}
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
