import axiosInstance from './httpService';

export const uploadresourse = async (data) => {
    try {
        const url = `${"/resourse/resourceupload"}`;
        const response = await axiosInstance.post(url,data,{
            headers: {
              'Content-Type': 'multipart/form-data',
            }});
        return response.data;
    } catch (error) {
        throw error;
    }
};