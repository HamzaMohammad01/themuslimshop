import apiClient from "./client";

const endpoint = "auth";
const login = async (user, onUploadProgress) => {
	return await apiClient.post(endpoint, user, {
		onUploadProgress: (progress) =>
			onUploadProgress(progress.loaded / progress.total),
	});
};

export { login };
