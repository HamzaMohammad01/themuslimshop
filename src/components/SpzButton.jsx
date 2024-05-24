import React from "react";

export default function SpzButton({ onClick, icon, text, otherStyles }) {
	return (
		<div
			onClick={onClick}
			className={`flex items-center justify-center w-full sm:w-auto mt-5 text-xl sm:text-2xl lg:text-xl text-text-0 px-4 h-12 sm:h-16 bg-red-500 rounded-full cursor-pointer ${otherStyles}`}
		>
			{icon}
			{text}
		</div>
	);
}
