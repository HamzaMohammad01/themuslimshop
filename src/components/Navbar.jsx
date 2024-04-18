import React from "react";
import {
	FaBarsStaggered,
	FaHouse,
	FaCartShopping,
	FaGear,
	FaHeadset,
	FaRegUser,
} from "react-icons/fa6";

export default function Navbar() {
	const iconStyle = "text-text-0 h-10 w-fit cursor-pointer";
	return (
		<div className="border-2 rounded-2xl h-fit w-20 ml-2 flex flex-col items-center p-1 space-y-5 pt-10 self-center fixed">
			<FaBarsStaggered className={`${iconStyle} !mb-5`} />
			<FaHouse className={iconStyle} />
			<FaCartShopping className={iconStyle} />
			<FaGear className={iconStyle} />
			<FaHeadset className={iconStyle} />
			<FaRegUser
				className={`${iconStyle} border-2 p-2 rounded-xl h-16 border-primary !mt-28 `}
			/>
		</div>
	);
}
