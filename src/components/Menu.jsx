import React from "react";
import { useNavigate } from "react-router-dom";

export default function Menu({ otherStyles }) {
	const navigate = useNavigate();

	const menus = ["men", "women", "clothes", "itr", "muslim"];
	const handleOnClick = (e) => {
		navigate("/listings", { state: { sortBy: `tags=${e}` } });
	};
	return (
		<ul
			className={
				"flex flex-wrap justify-center space-x-5 cursor-pointer mt-5 xs:hidden uppercase " +
				otherStyles
			}
		>
			{menus.map((e) => (
				<li
					className={menuStyle}
					key={e}
					onClick={() => handleOnClick(e)}
				>
					{e}
				</li>
			))}
		</ul>
	);
}

const menuStyle =
	"border-2 rounded-xl py-1 w-24 sm:w-32 flex items-center justify-center text-text-0 font-accent text-lg sm:text-xl";
