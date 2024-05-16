import React from "react";
import layered_waves from "../img/layered_waves.svg";

export default function Footer() {
	return (
		<div className="mt-32 ">
			<img
				src={layered_waves}
				alt="layered waves"
				className="w-full h-16"
				// style={{ width: "20vmin" }}
			/>
			<div className="text-text-0 font-primary text-center">
				<div className="text-7xl">The Muslim Shop</div>
				<div>Who said Muslim e-commerce can’t be beautiful</div>
			</div>
		</div>
	);
}
