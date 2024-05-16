import apiClient from "./client";

const endpoint = "listings";
const getListings = () => {
	return apiClient.get(endpoint);
};
const getListingById = (id) => apiClient.get(`${endpoint}/${id}`);
const addListing = async (listing, onUploadProgress) => {
	const data = new FormData();
	data.append("title", listing.title);
	data.append("price", listing.price);
	data.append("tags", listing.tags);
	if (listing.discount) data.append("discount", listing.discount);
	data.append("itemImage", listing.image[0]);

	return await apiClient.post(endpoint + "/upload", data, {
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
