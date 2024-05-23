import React from "react";
import { useForm } from "react-hook-form";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Search({ otherStyles, ...otherProps }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log(data);
		navigate("/listings", { state: { search: data.search } });
	};

	return (
		<form className={`w-11/12 mx-auto mt-2`} action="/listings">
			<div
				className={`flex items-center justify-end border-2 border-primary rounded-2xl ${otherStyles}`}
			>
				<input
					className={`h-16 block bg-black text-text-0 text-3xl px-4 focus:outline-none w-full rounded-2xl`}
					placeholder={"Search"}
					{...register("search", { required: "true" })}
					{...otherProps}
				/>
				<div
					className="bg-primary h-16 rounded-xl flex border-0 items-center justify-center w-16 hover:bg-accent cursor-pointer"
					onClick={handleSubmit(onSubmit)}
				>
					<FaMagnifyingGlass className="text-text-0 text-2xl" />
				</div>
			</div>
			{errors["search"] && (
				<div className="text-red-500">This field is required</div>
			)}
		</form>
	);
}
