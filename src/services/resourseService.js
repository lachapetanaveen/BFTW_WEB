import { axiosInstance, sub_URL } from './httpService';

export const uploadresourse = async (data) => {
    try {
        const url = `${sub_URL}${"/resourse/resourceupload"}`;
        const response = await axiosInstance.post(url,data,{
            headers: {
              'Content-Type': 'multipart/form-data',
            }});
        return response.data;
    } catch (error) {
        throw error;
    }
};