import { axiosInstance, sub_URL } from './httpService';
export const loginAuth = async (data) => {
    try {
        console.log('loginAuth data', data)
        const url = `${sub_URL}${'/auth/login'}`;
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const register = async (data) => {
    try {
        
        const url = `${sub_URL}${'/auth/signup'}`;
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getUserProfile = async (id) => {
    try {
        const url = `${sub_URL}${"/users/"}${id}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

