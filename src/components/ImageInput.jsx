import React from "react";
import { FaRegImage } from "react-icons/fa6";

export default function ImageInput({
	placeholder = "lorem",
	description,
	width = "w-9/12",
	register,
	errors,
	label,
	registerOptions,
}) {
	return (
		<>
			<div
				className={`h-80 ${width} border-2 border-primary bg-black rounded-xl text-text-0 text-3xl px-4 flex flex-col items-center justify-center font-secondary mt-5`}
			>
				<div className="textContainer flex flex-col items-center">
					<FaRegImage className="h-24 w-auto text-primary" />
					<div className="text-2xl">
						<input
							className="hidden"
							type="file"
							id="files"
							name="itemImage"
							{...register(label, registerOptions)}
						/>
						<label
							htmlFor="files"
							className="mr-3 text-primary hover:text-secondary transition-all"
						>
							Upload a file
						</label>

						<span className="text-text-300">or drag and drop</span>
					</div>
					<div className="text-text-300 text-lg">
						PNG, JPG upto 10MB
					</div>
				</div>
			</div>
			{errors[label] && (
				<div className="text-red-500">This field is required</div>
			)}
		</>
	);
}
