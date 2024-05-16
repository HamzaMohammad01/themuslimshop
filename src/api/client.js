import { create } from "apisauce";

const apiClient = create({
	baseURL: "http://localhost:8000/api/",
});

export default apiClient;
