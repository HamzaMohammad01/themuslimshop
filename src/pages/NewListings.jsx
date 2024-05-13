import React from "react";
import Navbar from "../components/Navbar";
import Buttom from "../components/Button";
import TextInput from "../components/TextInput";
import ImageInput from "../components/ImageInput";
import { useForm } from "react-hook-form";
import Button from "../components/Button";

function NewListings() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);
	return (
		<>
			<Navbar />

			<div className="bg-black dark:bg-black text-lg flex flex-col text-primary px-10 ml-20 items-center h-svh">
				<div className="textContainer self-baseline text-7xl text-text-0 items-baseline font-secondary mb-2">
					<div className="text1 mr-1">Add New</div>
					<div className="text1 text-primary text-8xl">Item</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full"
					action=""
					method="POST"
					encType="multipart/form-data"
				>
					<TextInput
						width="w-full"
						placeholder="Title"
						marginTop="mt-0"
						label="title"
						registerOptions={{ required: true }}
						register={register}
						errors={errors}
					/>
					<div className="flex w-full gap-5">
						<TextInput
							width="w-full"
							placeholder="Price"
							label="price"
							registerOptions={{ required: true }}
							register={register}
							errors={errors}
						/>
						<TextInput
							width="-w-1/2"
							placeholder="Currency"
							label="currency"
							registerOptions={{ required: true }}
							register={register}
							errors={errors}
						/>
					</div>
					<TextInput
						width="w-full"
						placeholder="Tags"
						label="tags"
						registerOptions={{ required: true }}
						register={register}
						errors={errors}
					/>

					<ImageInput
						width="w-full"
						label="image"
						register={register}
						registerOptions={{ required: true }}
						errors={errors}
					/>
					<input
						type="submit"
						className={`bg-primary w-max px-5 rounded-xl cursor-pointer flex text-3xl text-text-0 font-semibold p-2 mt-5`}
					/>
				</form>
			</div>
		</>
	);
}

export default NewListings;
