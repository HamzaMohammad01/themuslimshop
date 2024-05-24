import React from "react";
import layered_waves from "../img/layered_waves.svg";

export default function Footer() {
	return (
		<div className="footer relative mt-40">
			<img
				src={layered_waves}
				alt="layered waves"
				className="w-full h-full"
			/>
			<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center font-primary">
				<div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
					The Muslim Shop
				</div>
				<div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
					Who said Muslim e-commerce can’t be beautiful
				</div>
			</div>
		</div>
	);
}
