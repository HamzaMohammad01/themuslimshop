import apiClient from "./client";

const endpoint = "users";
const registerNewUser = async (user, onUploadProgress) => {
	return await apiClient.post(
		endpoint,
		{ ...user, cart: [] },
		{
			onUploadProgress: (progress) =>
				onUploadProgress(progress.loaded / progress.total),
		}
	);
};

const getCurrentUser = async (authToken) => {
	return await apiClient.get(
		`${endpoint + "/me"}`,
		{},
		{ headers: { "x-auth-token": authToken } }
	);
};

export { registerNewUser, getCurrentUser };
