import React from "react";
import layered_waves from "../img/layered_waves.svg";

export default function Footer() {
	return (
		<div className="">
			<img
				src={layered_waves}
				alt="layered waves"
				className="w-full absolute bottom-0 left-0"
				// style={{ width: "20vmin" }}
			/>
			<div
				className="absolute top-3/4 left-1/2 text-text-0 font-primary text-center"
				style={{ transform: "translate(-50%, -50%)" }}
			>
				<div className="text-7xl">The Muslim Shop</div>
				<div>Who said Muslim e-commerce can’t be beautiful</div>
			</div>
		</div>
	);
}
