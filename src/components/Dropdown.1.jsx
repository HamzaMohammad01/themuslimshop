import React, { useEffect, useRef, useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { addToHome, removeFromHome, getHomeItems } from "../api/home";

export default function Dropdown({ text = "Add To", items, setItems }) {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		loadHomeItems();
	}, []);

	const loadHomeItems = async () => {
		try {
			const response = await getHomeItems();
			setData(response.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	const chevRef = useRef();
	const handleOnClick = () => {
		chevRef.current.classList.toggle("rotate-90");
		setOpen(!open);
	};

	const categories = [
		{ name: "Hero", id: "hero" },
		{ name: "Muslim Must-Haves", id: "must_haves" },
		{ name: "Featured", id: "featured" },
	];

	const handleonChange = async (event, category) => {
		const checked = event.target.checked;
		const token = localStorage.getItem("token");

		try {
			if (checked) {
				await addToHome(category.id, items._id, token);
			} else {
				await removeFromHome(category.id, items._id, token);
			}
			const updatedData = await getHomeItems();
			setData(updatedData.data);
		} catch (error) {
			console.log(error.message);
		}
	};

	let isAdmin = false;
	if (localStorage.getItem("token")) {
		const decodedToken = jwtDecode(localStorage.getItem("token"));
		isAdmin = decodedToken.isAdmin;
	}

	if (isAdmin)
		return data ? (
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
						className={`bg-primary w-max px-5 py-1 rounded-r-full text-2xl border-l-2 border-text-0 flex items-center justify-center`}
					>
						<div ref={chevRef}>
							<FaChevronCircleRight className="text-text-0" />
						</div>
					</div>
				</div>
				{open && (
					<ul className="bg-primary w-full text-text-0">
						{categories.map((category) => {
							const isChecked = data[category.id]?.some(
								(d) => d._id === items._id
							);
							return (
								<div
									key={category.id}
									className="flex items-center"
								>
									<input
										type="checkbox"
										checked={isChecked}
										onChange={(event) =>
											handleonChange(event, category)
										}
									/>
									<li className="ml-2 inline">
										{category.name}
									</li>
								</div>
							);
						})}
					</ul>
				)}
			</div>
		) : (
			<div>Loading...</div>
		);
}
