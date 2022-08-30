import { axiosInstance } from "../../api/axios";
import { Message } from "../../api/types";

export const getMessages = (convId: string): Promise<Message[]> => {
   return axiosInstance.get(`message/${convId}`);
};

export const postMessage = (convId: string): Promise<Message[]> => {
   return axiosInstance.get(`message/${convId}`);
};
