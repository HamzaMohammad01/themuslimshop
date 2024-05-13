import apiClient from "./client";

const endpoint = "listings";
const getListings = () => {
	return apiClient.get(endpoint);
};
const getListingById = (id) => apiClient.get(`${endpoint}/${id}`);
const addListing = (listing, onUploadProgress) => {
	const data = new FormData();
	data.append("title", listing.title);
	data.append("price", listing.price);
	data.append("tags", listing.tags);
	if (listing.discount) data.append("discount", listing.discount);

	data.append("itemImage", {
		name: "itemImage",
		type: "image/jpeg",
		uri: listing.uri,
	});

	return apiClient.post(endpoint, data, {
		onUploadProgress: (progress) =>
			onUploadProgress(progress.loaded / progress.total),
	});
};
const updateListing = (id, data) => {
	return apiClient.put(`${endpoint}/${id}`, data);
};

const deleteListing = (id) => {
	return apiClient.delete(`${endpoint}/${id}`);
};

export {
	getListings,
	getListingById,
	addListing,
	updateListing,
	deleteListing,
};
