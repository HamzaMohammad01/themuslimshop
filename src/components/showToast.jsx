import React from "react";
import { toast } from "react-toastify";
import {
	FaCheckCircle,
	FaExclamationCircle,
	FaInfoCircle,
	FaMinusCircle,
} from "react-icons/fa"; // Import some icons from react-icons
import { FaCartPlus } from "react-icons/fa6";

function showToast(message, type = "adCart") {
	const Icon =
		type === "success" ? (
			<div className="size-5 mr-5 bg-primary rounded-full flex h-fit w-fit items-center justify-center p-2">
				<FaCheckCircle className="z-50 size-5" />
			</div>
		) : type === "error" ? (
			<div className="size-5 mr-5 bg-red-500 rounded-full flex h-fit w-fit items-center justify-center p-2">
				<FaExclamationCircle className="z-50 size-5" />
			</div>
		) : type === "adCart" ? (
			<div className="size-5 mr-5 bg-primary rounded-full flex h-fit w-fit items-center justify-center p-2">
				<FaCartPlus className="z-50 size-5" />
			</div>
		) : type === "rmCart" ? (
			<div className="size-5 mr-5 bg-red-500 rounded-full flex h-fit w-fit items-center justify-center p-2">
				<FaMinusCircle className="z-50 size-5" />
			</div>
		) : (
			<div className="size-5 mr-5 bg-red-500 rounded-full flex h-fit w-fit items-center justify-center p-2">
				<FaInfoCircle className="z-50 size-5" />
			</div>
		);

	toast(
		<div className="custom-toast-content flex items-center">
			{Icon}
			{message}
		</div>,
		{
			className: "bg-",
			bodyClassName: "bg-",
			progressClassName: "bg-",
		}
	);
}

export default showToast;
