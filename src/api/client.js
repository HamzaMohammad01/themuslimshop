import { create } from "apisauce";

const apiClient = create({
	baseURL: "https://themuslimshop-backend.onrender.com/api/",
});

export default apiClient;
