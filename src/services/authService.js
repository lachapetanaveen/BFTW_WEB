import axiosInstance from './httpService';

export const loginAuth = async (data) => {
    try {
        console.log('loginAuth data', data)
        const url = `${'/auth/login'}`;
        const response = await axiosInstance.post(url, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserProfile = async (id) => {
    try {
        const url = `${"/users/"}${id}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

