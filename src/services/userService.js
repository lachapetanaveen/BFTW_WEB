
import axiosInstance from './httpService';

export const getUserProfile = async (id) => {
    try {
        const url = `${"/users/"}${id}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateProfile = async (id,data) => {
    try {
        const url = `${"/users/"}${id}`;
        const response = await axiosInstance.put(url,data);
        return response.data;
    } catch (error) {
        throw error;
    }
};