
import { axiosInstance, sub_URL } from './httpService';

export const getUserProfile = async (id) => {
    try {
        const url = `${sub_URL}${"/users/"}${id}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateProfile = async (id, data) => {
    try {
        const url = `${sub_URL}${"/users/"}${id}`;
        const response = await axiosInstance.put(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getAllUsers = async () => {

    try {
        const url = `${sub_URL}${"/users"}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};