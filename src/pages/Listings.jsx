import React from "react";
import Navbar from "../components/Navbar";
import Buttom from "../components/Button";
import Button from "../components/Button";

export default function Listings() {
	const menuStyle =
		"border-2 rounded-xl py-1 w-32 flex items-center justify-center text-text-0 font-accent text-3xl";
	const data = [
		{
			title: "Ultra Muslim Cap",
			price: 40000,
			discount: 5,
			url: "https://source.unsplash.com/apple-products-on-table-tdMu8W9NTnY",
		},
		{
			title: "Ultra Muslim Cap",
			price: 2,
			discount: 3.14,
			url: "https://source.unsplash.com/apple-products-on-table-tdMu8W9NTnY",
		},
		{
			title: "Ultra Muslim Cap",
			price: 2,
			discount: 55,
			url: "https://source.unsplash.com/apple-products-on-table-tdMu8W9NTnY",
		},
	];
	return (
		<>
			<Navbar />

			<div className="bg-black dark:bg-black text-lg flex flex-col text-primary px-10 ml-20">
				{/* menu */}
				<ul className="flex space-x-5 mt-5 self-center">
					<li className={menuStyle}>Men</li>
					<li className={menuStyle}>Women</li>
					<li className={menuStyle}>Clothes</li>
					<li className={menuStyle}>Tech</li>
					<li className={menuStyle}>Watch</li>
				</ul>
				<div className="grid grid-cols-[repeat(auto-fill,550px)] gap-5 self-center">
					{data.map((e) => (
						<div className="container border-2 border-primary mt-10  rounded-2xl p-5">
							<img
								src={e.url}
								alt=""
								srcset=""
								className="rounded-2xl"
							/>
							<div className="title font-secondary text-text-0">
								{e.title}
							</div>
							<div className="flex items-center">
								<div className="price text-5xl">{`$${
									e.discount
										? (
												((100 - e.discount) / 100) *
												e.price
										  ).toFixed(2)
										: e.price
								}`}</div>
								<div className="mrp ml-10">
									<span className="line-through mr-2 text-text-300">{`MRP: ${e.price}`}</span>
									<span className="text-text-0">{`(${e.discount}% off)`}</span>
								</div>
							</div>
							<Button text="Add to Cart" otherStyles={"mt-5"} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
