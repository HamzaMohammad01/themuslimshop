import React from "react";

export default function TextInput({ placeholder = "lorem", description }) {
	return !description ? (
		<input
			className="h-20 w-9/12 block border-2 border-primary bg-black rounded-xl mb-5 text-text-0 text-3xl px-4"
			placeholder={placeholder}
		/>
	) : (
		<textarea
			className="w-9/12 block border-2 border-primary bg-black rounded-xl mb-5 pl-5 text-text-0 text-3xl p-5 h-52"
			placeholder={placeholder}
		/>
	);
}
