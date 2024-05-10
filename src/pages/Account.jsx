import React from "react";
import { FaRegUser } from "react-icons/fa6";
import Title from "../components/Title";
import Button from "../components/Button";

import shopping_bags from "../img/shopping_bags.png";
import lock from "../img/lock.png";
import Navbar from "../components/Navbar";

export default function Account() {
	const data = [
		["Username", "HamzaMohammad01"],
		["Email", "mohd2010hamza@gmail.com"],
		["Total Orders", "12"],
	];

	return (
		<>
			<Navbar />

			<div className="screen bg-black dark:bg-black text-lg flex flex-col text-primary px-10 ml-20">
				<div className="page h-svh flex flex-col">
					<div
						className="h-screen border-2 border-primary rounded-2xl mt-5 flex items-center"
						style={{ width: "100%", height: "40svh" }}
					>
						<div className="border-2 border-primary h-4/5 w-72 rounded-full ml-5 flex items-center justify-center">
							<FaRegUser className="text-text-0 h-3/5 w-auto" />
						</div>
						<div className="detailsContainer ml-10">
							{data.map((e) => (
								<div className="rightcol grid grid-cols-[1fr_0px_2fr] text-nowrap">
									<div className="text1 text-text-0 mr-5 text-3xl">
										{e[0]}
									</div>
									<div className="text2 text-3xl">{e[1]}</div>
								</div>
							))}
							<div className="rightcol grid grid-cols-[1fr_0px_2fr] text-nowrap">
								<div className="text1 text-text-0 mr-5 text-3xl">
									Password
								</div>
								<Button text="Change Password" />
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
							<img
								src={lock}
								alt=""
								className=" h-full rounded-xl"
							/>
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
			</div>
		</>
	);
}
