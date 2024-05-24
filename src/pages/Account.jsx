import React, { useEffect, useState } from "react";
import { FaRegUser, FaRightToBracket } from "react-icons/fa6";
import Button from "../components/Button";
import shopping_bags from "../img/shopping_bags.png";
import lock from "../img/lock.png";
import { getCurrentUser } from "../api/users";
import Navbar from "../components/Navbar";
import SpzButton from "../components/SpzButton";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import Footer from "../components/Footer";
import Title from "../components/Title";

export default function Account() {
	const navigate = useNavigate();

	// Load Data
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
			<Title />
			<Navbar />

			<div className="text-lg flex flex-col ml-20 xs:ml-0 text-primary px-4 sm:px-6 lg:px-20 mx-auto max-w-screen-xl">
				{/* User Container */}
				<div className="border-2 w-full h-auto p-5 md:p-10 border-primary rounded-2xl mt-5 flex flex-col lg:flex-row xl:flex-row items-center">
					{/* Avatar */}
					<div className="border-2 border-primary h-36 w-36 md:h-72 md:w-72 rounded-full flex items-center justify-center mb-5 lg:mb-0 lg:mr-10">
						<FaRegUser className="text-text-0 h-3/5 w-auto" />
					</div>
					{/* Right col */}
					<div>
						{/* particulars */}
						<div className="flex-1">
							<div className="flex flex-col space-y-4">
								<div className="flex flex-row items-center sm:items-start space-x-5">
									<div className="text-text-0 text-3xl xs:text-xl">
										Name
									</div>
									<div className="text-3xl xs:text-xl">
										{data.name}
									</div>
								</div>
								<div className="flex flex-row items-center sm:items-start space-x-5">
									<div className="text-text-0 text-3xl xs:text-xl">
										Email
									</div>
									<div className="text-3xl xs:text-xl">
										{data.email}
									</div>
								</div>
								<div className="flex flex-row items-center sm:items-start space-x-5">
									<div className="text-text-0 text-3xl xs:text-xl">
										Password
									</div>
									<div>
										<Button
											text="Change Password"
											otherStyles={"xs:text-xl"}
										/>
									</div>
								</div>
							</div>
							{/* Logout Button */}
							<SpzButton
								onClick={() => {
									navigate("/login");
									localStorage.removeItem("token");
								}}
								icon={
									<FaRightToBracket className="text-2xl mr-2 sm:mr-4" />
								}
								text={"Logout"}
							/>
						</div>
					</div>
				</div>
				{/* lower items */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
					{/* Right col */}
					<div
						className="border-2 border-primary rounded-2xl flex items-center p-4"
						style={{ height: "25vh" }}
					>
						<img
							src={shopping_bags}
							alt=""
							className="h-full w-auto md:w-auto rounded-xl lmg:h-32"
						/>
						<div className="ml-4">
							<div className="text-text-0 text-xl sm:text-3xl">
								YOUR ORDERS
							</div>
							<div className="text-text-300 text-sm sm:text-xl">
								Track, Return or Buy again
							</div>
						</div>
					</div>
					{/* left col */}
					<div
						className="border-2 border-primary rounded-2xl flex items-center p-4"
						style={{ height: "25vh" }}
					>
						<img
							src={lock}
							alt=""
							className="h-full w-auto md:w-auto rounded-xl lmg:h-32"
						/>
						<div className="ml-4">
							<div className="text-text-0 text-xl sm:text-3xl">
								Login & Security
							</div>
							<div className="text-text-300 text-sm sm:text-xl">
								Edit login name, email, and mobile number
							</div>
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
