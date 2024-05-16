import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Buttom from "../components/Button";
import Button from "../components/Button";
import { getListings } from "../api/listings";
import apiClient from "../api/client";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "../components/AddToCartButton";

export default function Listings() {
	const navigate = useNavigate();
	const [data, setData] = useState();
	useEffect(() => {
		loadListings();
	}, []);
	const loadListings = async () => {
		const response = await getListings();
		setData(response.data);
		// console.log(data);
	};
	const handleClick = (name, id) => {
		navigate("/listing-details", { state: id });
	};

	return data ? (
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
				<div className="grid grid-cols-[repeat(auto-fill,560px)] gap-5 grid-rows-[auto auto auto]">
					{data.map((e) => {
						return (
							<div
								className="container border-2 border-primary mt-10  rounded-2xl p-5 grid grid-rows-subgrid"
								style={{ gridRow: "1/4" }}
							>
								<img
									onClick={() => handleClick(e.title, e._id)}
									src={`${apiClient
										.getBaseURL()
										.replace("api/", "")}${e.url}`}
									alt=""
									srcset=""
									className="rounded-2xl"
								/>
								<div className="">
									<div className="title font-secondary text-text-0">
										{e.title}
									</div>
									<div className="flex items-center">
										<div className="price text-5xl">{`$${
											e.discount
												? (
														((100 - e.discount) /
															100) *
														e.price
												  ).toFixed(2)
												: e.price
										}`}</div>
										{e.discount && (
											<div className="mrp ml-10">
												<span className="line-through mr-2 text-text-300">{`MRP: ${e.price}`}</span>
												<span className="text-text-0">{`(${e.discount}% off)`}</span>
											</div>
										)}
									</div>
									<AddToCartButton
										item={e._id}
										otherStyles={"mt-3"}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	) : (
		<div>Loading</div>
	);
}

const menuStyle =
	"border-2 rounded-xl py-1 w-32 flex items-center justify-center text-text-0 font-accent text-3xl";
