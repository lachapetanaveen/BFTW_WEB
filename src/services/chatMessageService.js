import axiosInstance from './httpService';

export const getAllChats = async () => {
    try {
        const url = `${"/chat"}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const crateChat = async (userId) => {
    try {
        const url = `${"/chat"}`;
        const response = await axiosInstance.post(url,userId);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const getChatMessages = async (id) => {
    try {
        const url = `${"/message/"}${id}`;
        const response = await axiosInstance.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const sendChatMessages = async (content) => {
    try {
        const url = `${"/message"}`;
        const response = await axiosInstance.post(url,content);
        return response.data;
    } catch (error) {
        throw error;
    }
};