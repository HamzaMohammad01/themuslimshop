// ImageInput.jsx
import React from "react";
import { FaRegImage } from "react-icons/fa6";
import Button from "./Button";

export default function ImageInput({
	width = "w-full md:w-9/12",
	register,
	errors,
	label,
	registerOptions,
	onImageUpload,
	uploadedImage,
}) {
	return (
		<>
			<div
				className={`h-80 ${width} border-2 border-primary bg-black rounded-xl text-text-0 text-3xl px-4 flex flex-col items-center justify-center font-secondary mt-5`}
			>
				<div className="textContainer flex flex-col items-center">
					<input
						className="hidden"
						type="file"
						id="files"
						{...register(label, registerOptions)}
						onChange={(e) => {
							onImageUpload(e);
							register(label).onChange(e); // Ensure the change event is registered
						}}
					/>
					{uploadedImage ? (
						<div className="flex flex-col items-center">
							<img
								src={uploadedImage}
								alt="Uploaded Preview"
								className="h-64 w-auto rounded-2xl"
							/>
							<label htmlFor="files">
								<Button
									text="Choose Another"
									otherStyles={"text-xl mt-2"}
								/>
							</label>
						</div>
					) : (
						<>
							<FaRegImage className="h-24 w-auto text-primary" />
							<div className="text-2xl">
								<div className="flex flex-col items-center justify-center">
									<label
										htmlFor="files"
										className="mr-3 text-primary hover:text-secondary transition-all"
									>
										Upload a file
									</label>
									<span className="text-text-300">
										or drag and drop
									</span>
								</div>
							</div>
							<div className="text-text-300 text-lg">
								PNG, JPG up to 10MB
							</div>
						</>
					)}
				</div>
			</div>
			{errors[label] && (
				<div className="text-red-500">This field is required</div>
			)}
		</>
	);
}
