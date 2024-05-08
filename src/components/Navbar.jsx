import React, { useRef } from "react";
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
	const navRef = useRef();
	// const handleOnScroll = () => {
	// 	let element = document.querySelector(".lastInfoSlider");
	// 	let offsetY = element.getBoundingClientRect().bottom;
	// 	console.log(offsetY);
	// 	console.log(window.scrollY);
	// 	if (window.scrollY == offsetY) {
	// 		navRef.current.classList.toggle("fixed");
	// 	}
	// };

	// const window = document.defaultView;
	// window.addEventListener("scroll", handleOnScroll);
	return (
		<div
			ref={navRef}
			className="border-2 rounded-2xl h-fit w-20 ml-2 flex flex-col items-center p-1 space-y-5 pt-10 fixed"
		>
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
