import React, { useRef } from "react";
import {
	FaHouse,
	FaCartShopping,
	FaGear,
	FaHeadset,
	FaRegUser,
	FaRightFromBracket,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar() {
	const iconStyle = "text-text-0 h-10 w-fit cursor-pointer";
	const navRef = useRef();

	return (
		<div
			ref={navRef}
			className={
				"border-2 rounded-2xl h-fit w-20 z-50 ml-2 flex flex-col items-center p-1 space-y-5 pt-10 fixed xs:space-y-0 xs:border-0 xs:bg-primary xs:bottom-0 xs:w-full xs:flex-row xs:justify-around xs:ml-0 xs:p-5 top-1/4 xs:top-auto"
			}
		>
			<Link to={"/"}>
				<FaHouse className={iconStyle} />
			</Link>
			<Link to={"/orders"}>
				<FaCartShopping className={iconStyle} />
			</Link>
			<Link to={"/"}>
				<FaGear className={iconStyle} />
			</Link>
			<Link to={"/contact"}>
				<FaHeadset className={iconStyle} />
			</Link>
			<Link to={localStorage.getItem("token") ? "/account" : "/login"}>
				{localStorage.getItem("token") ? (
					<FaRegUser
						className={`${iconStyle} border-2 p-2 rounded-xl h-16 border-primary !mt-28 xs:!mt-0 xs:border-0 xs:p-0 xs:h-10`}
					/>
				) : (
					<FaRightFromBracket
						className={`${iconStyle} border-2 p-2 rounded-xl h-16 border-primary !mt-28 xs:!mt-0 xs:border-0 xs:p-0 xs:h-10`}
					/>
				)}
			</Link>
		</div>
	);
}
