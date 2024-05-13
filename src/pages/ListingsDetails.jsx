import React from "react";
import Navbar from "../components/Navbar";
import Buttom from "../components/Button";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import ImageInput from "../components/ImageInput";

export default function ListingsDetails() {
	const data = [
		{
			title: "Ultra Muslim Book",
			price: 1000,
			url: "https://source.unsplash.com/slightly-opened-silver-macbook-mP7aPSUm7aE",
			tags: [""],
			discount: 15,
		},
	];
	return (
		<>
			<Navbar />

			<div className="bg-black dark:bg-black text-lg text-primary px-10 ml-20 mt-14 h-svh grid grid-cols-2 gap-10">
				<img
					src={data[0].url}
					className="w-full h-auto rounded-2xl border-2 border-text-0"
					alt=""
				/>
				<div>
					<div className="title font-secondary text-4xl text-text-0 mb-2">
						{data[0].title}
					</div>
					<div className="flex items-center mb-4">
						<div className="price text-6xl">{`$${
							data[0].discount
								? (
										((100 - data[0].discount) / 100) *
										data[0].price
								  ).toFixed(2)
								: data[0].price
						}`}</div>
						<div className="mrp ml-5">
							<span className="line-through mr-2 text-text-300">{`MRP: ${data[0].price}`}</span>
							<span className="text-text-0">{`(${data[0].discount}% off)`}</span>
						</div>
					</div>
					<Button text="Add to Cart" />
				</div>
			</div>
		</>
	);
}
