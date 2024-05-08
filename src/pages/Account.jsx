import React from "react";
import { FaRegUser } from "react-icons/fa6";

export default function Account() {
	return (
		<div>
			<div className="border-2 border-primary px-5 py-10 flex w-full">
				<div className="border-2 border-primary rounded-full p-14">
					<FaRegUser />
				</div>
			</div>
			<div className="flex">
				<div className="border-2 border-primary"></div>
				<div className="border-2 border-primary"></div>
			</div>
		</div>
	);
}
