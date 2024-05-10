import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import moneyBag from "../img/money_bag.png";
import Navbar from "../components/Navbar";

export default function Orders() {
	const [totalPrice, setTotalPrice] = useState(0);
	const data = [
		{
			title: "Ultra Muslim Cap",
			price: 2,
			url: "https://source.unsplash.com/slightly-opened-silver-macbook-mP7aPSUm7aE",
		},
		{
			title: "Ultra Muslim Siwak",
			price: 2,
			url: "https://source.unsplash.com/slightly-opened-silver-macbook-mP7aPSUm7aE",
		},
		{
			title: "Muslim Prayer Mat for Ultra Kushu",
			price: 2,
			url: "https://source.unsplash.com/slightly-opened-silver-macbook-mP7aPSUm7aE",
		},
	];
	return (
		<>
			<Navbar />
			<div className="screen h-svh bg-black dark:bg-black text-lg text-primary px-10 ml-20 flex gap-10">
				<div className="rightcol">
					<div className="orderTotal flex items-center text-3xl ">
						<img src={moneyBag} className="w-36 " alt="" />
						<div className="textContainer translate-y-5">
							<span className="text-text-0 ">
								Order subtotal:{" "}
							</span>
							<span className="text-primary font-bold">{`$${totalPrice}`}</span>
						</div>
					</div>
					{data.map((e) => (
						<div className="tile border-2 rounded-xl border-primary flex items-center p-5 mb-5 font-secondary w-5/6">
							<img
								src={e.url}
								alt=""
								className="w-4/12 rounded-xl border-2 border-text-0 mr-5"
							/>
							<div className="textContainer text-2xl">
								<div className="text-text-0">{e.title}</div>
								<div className="font-bold">{`$${e.price}`}</div>
								<Button
									text="Remove"
									otherStyles={"!bg-red-600 mt-5"}
								/>
							</div>
							<input
								type="checkbox"
								className="p-2 ml-auto size-7 border-2 checked:border-secondary after:bg-black"
							/>
						</div>
					))}
				</div>
				<div className="leftCol border-l-2 border-b-2 h-full fixed right-0 top-0 border-primary w-52 flex flex-col items-center">
					{data.map((e) => (
						<img
							src={e.url}
							alt=""
							className=" w-9/12 my-5 rounded-xl border-2 border-text-0 mr-5"
						/>
					))}
					<div className="font-secondary text-2xl flex flex-col items-center">
						<div className="text-text-0">Subtotal</div>
						<div className="font-bold">{`$${totalPrice}`}</div>
					</div>
				</div>
			</div>
		</>
	);
}
