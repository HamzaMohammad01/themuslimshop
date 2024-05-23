import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import moneyBag from "../img/money_bag.png";
import Navbar from "../components/Navbar";
import { getCartItems } from "../api/cart";
import RemoveFromCartButton from "../components/RemoveFromCartButton";
import Spinner from "../components/Spinner";

import apiClient from "../api/client";
import Search from "../components/Search";
import Quantity from "../components/Quantity";
import makePayment from "../api/makePayment";

export default function Cart() {
	const [totalPrice, setTotalPrice] = useState(0);
	const [data, setData] = useState();

	useEffect(() => {
		loadCart();
	}, []);

	const loadCart = async () => {
		try {
			const response = await getCartItems(localStorage.getItem("token"));
			setData(response.data.cart.items);
			// Update total price
			const total = response.data.cart.items.reduce(
				(sum, item) => sum + item.price,
				0
			);
			setTotalPrice(total);
			console.log(response.data.cart.items);
		} catch (error) {
			console.log(error.message);
		}
	};

	return data ? (
		<>
			<Navbar />
			<Search otherStyles={"xl:w-11/12"} />
			<div className="text-lg text-primary pl-10 xl:pr-5 ml-20 xs:ml-0 flex xs:p-5 gap-10 xs:mb-24">
				<div className="rightcol mr-10 xs:mr-0">
					<div className="orderTotal flex items-center text-3xl xs:text-2xl ">
						<img src={moneyBag} className="w-36 xs:w-20" alt="" />
						<div className="textContainer translate-y-5">
							<span className="text-text-0 ">
								Order subtotal:{" "}
							</span>
							<span className="text-primary font-bold">{`$${totalPrice}`}</span>
						</div>
					</div>
					<Button
						text="Proceed to Checkout"
						otherStyles={"mt-5 mb-5"}
						onClick={() => makePayment(data)}
					/>
					{data.map((e) => (
						<div
							className="tile border-2 rounded-xl border-primary flex items-center p-5 mb-5 font-secondary xl:w-5/6 flex-col md:flex-row w-full"
							key={e._id}
						>
							{/* <input
								type="checkbox"
								className="p-2 size-7 md:mr-5 border-2 checked:border-secondary after:bg-black md:mb-0 mb-4 mr-auto"
							/> */}
							<img
								src={`${apiClient
									.getBaseURL()
									.replace("api/", "")}${e.url}`}
								alt=""
								className="w-full md:w-4/12 mb-5 md:mb-0 rounded-xl border-2 border-text-0 md:mr-5"
							/>
							<div className="textContainer text-2xl">
								<div className="text-text-0">{e.title}</div>
								<div className="font-bold">{`$${e.price}`}</div>
								<RemoveFromCartButton
									item={e._id}
									cb={loadCart}
									otherStyles="mt-2"
								/>
								<Quantity />
							</div>
						</div>
					))}
				</div>
				<div className="leftCol border-l-2 border-b-2 h-full fixed right-0 top-0 border-primary w-52 flex-col items-center hidden xl:flex">
					{data.map((e) => (
						<img
							src={`${apiClient
								.getBaseURL()
								.replace("api/", "")}${e.url}`}
							alt=""
							className=" w-9/12 my-5 rounded-xl border-2 border-text-0 mr-5"
							key={e._id}
						/>
					))}
					<div className="font-secondary text-2xl flex flex-col items-center">
						<div className="text-text-0">Subtotal</div>
						<div className="font-bold">{`$${totalPrice}`}</div>
					</div>
				</div>
			</div>
		</>
	) : (
		<Spinner />
	);
}
