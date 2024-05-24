import React, { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Spinner from "../components/Spinner";
import Quantity from "../components/Quantity";
import { getListingById } from "../api/listings";
import Search from "../components/Search";
import AddToCartButton from "../components/AddToCartButton";
import Title from "../components/Title";
import Footer from "../components/Footer";

import { useLocation } from "react-router-dom";

export default function ListingDetails() {
	const { state } = useLocation();
	const [data, setData] = useState(null);
	useEffect(() => {
		loadListing();
	}, []);
	const loadListing = async () => {
		const response = await getListingById(state);
		if (response.ok) {
			setData(response.data);
		} else {
			setData(null);
		}
	};

	return data ? (
		<>
			<Title />
			<Navbar />
			<Search />
			<div className="text-lg text-primary px-4 sm:px-6 lg:px-20 mx-auto mt-14 max-w-screen-xl ml-20 xs:ml-0">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					<img
						src={data.url}
						className="w-full h-auto rounded-2xl border-2 border-text-0"
						alt={data.title}
					/>
					<div>
						<div className="title font-secondary text-3xl sm:text-4xl text-text-0 mb-2">
							{data.title}
						</div>
						<div className="flex items-center mb-4">
							<div className="price text-4xl sm:text-6xl">{`₹${
								data.discount
									? (
											((100 - data.discount) / 100) *
											data.price
									  ).toFixed(2)
									: data.price
							}`}</div>
							{data.discount && (
								<div className="mrp ml-5">
									<span className="line-through mr-2 text-text-300">{`MRP: ₹${data.price}`}</span>
									<span className="text-text-0">{`(${data.discount}% off)`}</span>
								</div>
							)}
						</div>
						<div className="flex flex-col space-y-4">
							<Quantity />
							<AddToCartButton item={data._id} />
							<Button text="Buy Now" />
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	) : (
		<Spinner />
	);
}
