import { axiosInstance } from "../../api/axios";
import { Message, MessageDto } from "../../api/types";

export const getMessages = (convId: string): Promise<Message[]> => {
   return axiosInstance.get(`message/${convId}`);
};

export const postMessage = (payload: MessageDto): Promise<Message> => {
   return axiosInstance.post("message/", payload);
};
