import React, { useState } from "react";

import Navbar from "../components/Navbar";
import TextInput from "../components/TextInput";
import ImageInput from "../components/ImageInput";
import { addListing } from "../api/listings.js";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import showToast from "../components/showToast.jsx";
import Title from "../components/Title";
import Footer from "../components/Footer";

function NewListings() {
	const schema = yup.object().shape({
		title: yup
			.string()
			.min(3, "Title must be at least 3 characters long")
			.required("Title is required"),
		price: yup
			.number()
			.typeError("Price must be a number")
			.min(1, "Price cannot be 0")
			.required("Price is required"),
		tags: yup.string().required("Tags are required"),
		image: yup
			.mixed()
			.required("Please upload an image of your item")
			.test(
				"fileSize",
				"The image size must be less than 10MB",
				(value) => {
					return (
						value &&
						value.length > 0 &&
						value[0].size <= 10 * 1024 * 1024
					); // Check file size
				}
			)
			.test(
				"fileType",
				"Only PNG and JPG formats are allowed",
				(value) => {
					return (
						value &&
						value.length > 0 &&
						["image/jpeg", "image/png"].includes(value[0].type)
					); // Check file type
				}
			),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const navigate = useNavigate();
	const [progress, setProgress] = useState(0);

	// POST request
	const [uploadedImage, setUploadedImage] = useState(null);
	const onSubmit = async (data) => {
		data.tags = JSON.stringify(data.tags.split(" "));
		await addListing(
			data,
			(progress) => {
				setProgress(progress);
			},
			localStorage.getItem("token")
		);
		showToast("Item Added Successfully", "success");
	};

	const handleImageUpload = (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			setUploadedImage(imageUrl);
		}
	};

	let token = localStorage.getItem("token");
	let decoded;
	if (token) decoded = jwtDecode(token);
	const isAdmin = token && decoded.isAdmin;

	return isAdmin ? (
		<>
			<Title />
			<Navbar />
			<div className="text-lg flex flex-col text-primary px-10 items-center h-screen ml-20 xs:ml-0">
				<div className="textContainer self-baseline text-4xl md:text-7xl text-text-0 font-secondary mb-2 mt-5 lg:mt-0">
					<div className="text1 mr-1">Add New</div>
					<div className="text1 text-primary text-5xl md:text-8xl">
						Item
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="w-full"
					action="/upload"
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
					<TextInput
						width="w-full"
						placeholder="Price"
						label="price"
						registerOptions={{ required: true }}
						register={register}
						errors={errors}
					/>
					<TextInput
						width="w-full"
						placeholder="Tags"
						label="tags"
						registerOptions={{ required: true }}
						register={register}
						errors={errors}
					/>
					<ImageInput
						width="w-full mt-5"
						label="image"
						register={register}
						registerOptions={{ required: true }}
						errors={errors}
						onImageUpload={handleImageUpload}
						uploadedImage={uploadedImage}
					/>
					<div className="flex items-center h-fit mt-5">
						<button
							type="submit"
							className="bg-primary w-max px-5 rounded-xl cursor-pointer flex text-3xl text-text-0 font-semibold p-2 disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={progress > 0 && progress < 1}
						>
							Submit
						</button>
						<div
							className={`spinner h-10 ml-5 w-10 rounded-full border-primary border-x-8 animate-spin ${
								progress > 0 && progress < 1
									? "block"
									: "hidden"
							}`}
						/>
					</div>
				</form>
			</div>
			<Footer />
		</>
	) : (
		navigate("/errorpage", { state: 403, replace: true })
	);
}

export default NewListings;
