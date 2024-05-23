import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getListings, searchListings } from "../api/listings";
import apiClient from "../api/client";
import { useLocation, useNavigate } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";
import Dropdown from "../components/Dropdown";
import Search from "../components/Search";
import Spinner from "../components/Spinner";

export default function Listings({ sort }) {
	const location = useLocation();
	const allParams = new URLSearchParams(location.search);
	const state = allParams.get("search");
	console.log(state);
	const navigate = useNavigate();

	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		loadListings();
	}, [state]); // Reload listings whenever the search state changes

	const loadListings = async () => {
		setLoading(true);
		let response;
		if (state) {
			response = await searchListings(state);
		} else if (sort) {
			// Implement sorting logic if needed
		} else {
			response = await getListings();
		}
		setData(response.data);
		console.log(response);
		setLoading(false);
	};

	const handleClick = (name, id) => {
		navigate("/listing-details", { state: id });
	};

	return (
		<>
			<Navbar />
			<Search />
			{/* container */}
			{loading ? (
				<Spinner />
			) : data !== "No Item Found" ? (
				navigate("/errorpage", { state: 404, replace: true })
			) : (
				<div className="text-lg flex flex-col text-primary px-4 sm:px-6 lg:px-20 mx-auto max-w-screen-xl ml-20 xs:ml-0">
					{/* menu */}
					<ul className="flex flex-wrap justify-center space-x-5 mt-5 xs:hidden">
						<li className={menuStyle}>Men</li>
						<li className={menuStyle}>Women</li>
						<li className={menuStyle}>Clothes</li>
						<li className={menuStyle}>Tech</li>
						<li className={menuStyle}>Watch</li>
					</ul>

					{/* grid item */}
					<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
						{data.map((e) => (
							<div
								key={e._id}
								className="container border-2 border-primary rounded-2xl p-5 flex flex-col items-center"
							>
								<img
									onClick={() => handleClick(e.title, e._id)}
									src={`${apiClient
										.getBaseURL()
										.replace("api/", "")}${e.url}`}
									alt={e.title}
									className="rounded-2xl w-full h-64 object-cover cursor-pointer"
								/>
								<div className="w-full mt-4">
									<div className="title font-secondary text-text-0 text-xl">
										{e.title}
									</div>
									<div className="flex items-center mt-2">
										<div className="price text-5xl text-primary">
											{`$${
												e.discount
													? (
															((100 -
																e.discount) /
																100) *
															e.price
													  ).toFixed(2)
													: e.price
											}`}
										</div>
										{e.discount && (
											<div className="ml-4 text-text-300">
												<span className="line-through mr-2">{`MRP: $${e.price}`}</span>
												<span className="text-text-0">{`(${e.discount}% off)`}</span>
											</div>
										)}
									</div>
									<AddToCartButton
										item={e._id}
										otherStyles="mt-3"
									/>
									<Dropdown
										items={e}
										loadListings={loadListings}
										setItems={setData}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
}

const menuStyle =
	"border-2 rounded-xl py-1 w-24 sm:w-32 flex items-center justify-center text-text-0 font-accent text-lg sm:text-xl";
