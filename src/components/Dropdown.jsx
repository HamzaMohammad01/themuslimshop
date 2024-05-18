import React, { useRef, useState } from "react";
import Button from "./Button";
import { FaChevronCircleRight } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";

export default function Dropdown({ text = "Add To" }) {
	const [open, setOpen] = useState(false);
	const chevRef = useRef();
	let handleOnClick = () => {
		chevRef.current.classList.toggle("rotate-90");
		setOpen(!open);
		console.log(open);
	};
	const data = ["Hero", "Muslim Must-Haves", "Featured", "Recently Bought"];

	const handleonChange = (e) => {
		console.log(e);
	};
	let isAdmin = false;
	if (localStorage.getItem("token")) {
		let decodedToken = jwtDecode(localStorage.getItem("token"));
		isAdmin = decodedToken.isAdmin;
	}

	return (
		isAdmin && (
			<div className="cursor-pointer w-max h-max bg-primary rounded-lg mt-5 p-1">
				<div
					className="flex cursor-pointer w-max"
					onClick={handleOnClick}
				>
					<div
						className={`bg-primary px-5 py-1 rounded-l-full text-2xl text-text-0 font-semibold`}
					>
						{text}
					</div>
					<div
						className={`bg-primary w-max px-5 py-1 rounded-r-full  text-2xl border-l-2 border-text-0 flex items-center justify-center`}
					>
						<div ref={chevRef}>
							<FaChevronCircleRight className="text-text-0 " />
						</div>
					</div>
				</div>
				{open && (
					<ul className="bg-primary w-full text-text-0">
						{data.map((e) => (
							<div>
								<input
									type="checkbox"
									onChange={() => handleonChange(e)}
								/>
								<li className="ml-2 inline">{e}</li>
							</div>
						))}
					</ul>
				)}
			</div>
		)
	);
}
