import React, { useEffect, useState } from "react";
import { FaRegUser, FaRightToBracket } from "react-icons/fa6";
import Button from "../components/Button";

import shopping_bags from "../img/shopping_bags.png";
import lock from "../img/lock.png";
import { getCurrentUser } from "../api/users";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Account() {
	const navigate = useNavigate();

	//Load Data
	const [data, setData] = useState();
	useEffect(() => {
		loadUser();
	}, []);
	const loadUser = async () => {
		const token = localStorage.getItem("token");
		if (token) {
			const response = await getCurrentUser(token);
			setData(response.data);
		}
	};

	return data ? (
		<>
			<Navbar />

			<div className="text-lg flex flex-col text-primary px-10 ml-20">
				{/* User Container */}
				<div className="border-2 w-full h-auto p-10 border-primary rounded-2xl mt-5 flex items-center">
					{/* Avatar */}
					<div className="border-2 border-primary h-72 w-72 rounded-full ml-5 flex items-center justify-center">
						<FaRegUser className="text-text-0 h-3/5 w-auto" />
					</div>
					<div className="detailsContainer ml-10">
						<div className="rightcol grid grid-cols-[1fr_0px_2fr] text-nowrap">
							<div className="text1 text-text-0 mr-5 text-3xl">
								Name
							</div>
							<div className="text2 text-3xl">{data.name}</div>
						</div>
						<div className="rightcol grid grid-cols-[1fr_0px_2fr] text-nowrap">
							<div className="text1 text-text-0 mr-5 text-3xl">
								Email
							</div>
							<div className="text2 text-3xl">{data.email}</div>
						</div>
						<div className="rightcol grid grid-cols-[1fr_0px_2fr] text-nowrap">
							<div className="text1 text-text-0 mr-5 text-3xl">
								Password
							</div>
							<Button text="Change Password" />
						</div>
						{/* Logout Button */}
						<div
							onClick={() => {
								navigate("/login");
								localStorage.removeItem("token");
							}}
							className="buttonContainer flex items-center justify-center w-auto mt-5 text-3xl text-text-0 px-4 h-16 ml-auto mr-5 bg-primary rounded-full self-center cursor-pointer"
						>
							<FaRightToBracket className="text-text-0 text-2xl mr-4" />
							Logout
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-5">
					<div
						className="h-screen border-2 border-primary rounded-2xl mt-5 flex flex items-center"
						style={{ width: "100%", height: "25svh" }}
					>
						<img
							src={shopping_bags}
							alt=""
							className="h-full rounded-xl"
						/>
						<div className="textContainer">
							<div className="text-text-0 text-3xl">
								YOUR ORDERS
							</div>
							<div className="text-text-300 text-xl">
								Track, Return or Buy again
							</div>
						</div>
					</div>
					<div
						className="h-screen border-2 border-primary rounded-2xl mt-5 flex items-center"
						style={{ width: "100%", height: "25svh" }}
					>
						<img src={lock} alt="" className=" h-full rounded-xl" />
						<div className="textContainer">
							<div className="text-text-0 text-3xl">
								Login & Security
							</div>
							<div className="text-text-300 text-xl">
								Edit login name, email, and mobile number
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	) : (
		<div className="text-8xl text-primary">You are not Logged In</div>
	);
}
