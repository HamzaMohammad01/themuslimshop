import React from "react";

export default function Spinner() {
	return (
		<div className="h-[90svh] w-svw flex flex-col items-center justify-center">
			<div className="h-48 w-48 rounded-full border-primary border-x-8 animate-spin" />
		</div>
	);
}
