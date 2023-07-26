
import axiosInstance from './httpService';

export const getAllUsers = async () => {
   
    try {
        const url = `${"/users"}`;
        const response = await axiosInstance.get(url);
        console.log(response,'response');
        return response.data;
    } catch (error) {
        throw error;
    }
};

