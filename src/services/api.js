
// employwise/src/services/api.js
import axios from "axios";

const API_URL = "https://reqres.in/api";

export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
export const fetchUsers = (page) => axios.get(`${API_URL}/users?page=${page}`);
export const fetchUserById = (id) => axios.get(`${API_URL}/users/${id}`);
export const updateUser = async (id, data) => {
  try {
    const response = await axios.put(`${API_URL}/users/${id}`, data);
    console.log("Update Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Update Error:", error);
    throw error;
  }
};
export const deleteUser = (id) => axios.delete(`${API_URL}/users/${id}`);
