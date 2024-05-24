import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Quantity() {
	const [quantity, setQuantity] = useState(0);
	const handleSubtract = () => {
		if (quantity > 0) {
			let myQuantity = quantity - 1;
			setQuantity(myQuantity);
		}
	};
	const handleAdd = () => {
		if (quantity < 100) {
			let myQuantity = quantity + 1;
			setQuantity(myQuantity);
		}
	};

	return (
		<div className="border-2 border-primary rounded-full h-10 w-40 grid-cols-3 mt-5 flex items-center justify-around text-2xl">
			<div
				onClick={handleSubtract}
				className="bg-primary h-full rounded-l-xl w-full text-text-0 flex items-center justify-center cursor-pointer select-none"
			>
				<FaMinus />
			</div>
			<div className="h-full w-full text-primary flex items-center justify-center">
				{quantity}
			</div>
			<div
				onClick={handleAdd}
				className="bg-primary h-full rounded-r-xl w-full text-text-0 flex items-center justify-center cursor-pointer select-none"
			>
				<FaPlus />
			</div>
		</div>
	);
}
