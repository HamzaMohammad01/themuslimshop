import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Buttom from "../components/Button";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import ImageInput from "../components/ImageInput";
import { getListingById } from "../api/listings";
import apiClient from "../api/client";
import { useLocation } from "react-router-dom";

export default function ListingsDetails() {
	const { state } = useLocation();
	const [data, setData] = useState();
	useEffect(() => {
		loadListings();
	}, []);
	const loadListings = async () => {
		const response = await getListingById(state);
		setData(response.data);
	};

	return data ? (
		<>
			<Navbar />

			<div className="bg-black dark:bg-black text-lg text-primary px-10 ml-20 mt-14 h-svh grid grid-cols-2 gap-10">
				<img
					src={`${apiClient.getBaseURL().replace("api/", "")}${
						data.url
					}`}
					className="w-full h-auto rounded-2xl border-2 border-text-0"
					alt=""
				/>
				<div>
					<div className="title font-secondary text-4xl text-text-0 mb-2">
						{data.title}
					</div>
					<div className="flex items-center mb-4">
						<div className="price text-6xl">{`$${
							data.discount
								? (
										((100 - data.discount) / 100) *
										data.price
								  ).toFixed(2)
								: data.price
						}`}</div>
						<div className="mrp ml-5">
							<span className="line-through mr-2 text-text-300">{`MRP: ${data.price}`}</span>
							<span className="text-text-0">{`(${data.discount}% off)`}</span>
						</div>
					</div>
					<Button text="Add to Cart" />
					<Button text="Buy Now" />
				</div>
			</div>
		</>
	) : (
		<div>Loading</div>
	);
}
