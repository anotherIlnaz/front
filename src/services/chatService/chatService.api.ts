import { Console } from "console";
import { axiosInstance } from "../../api/axios";
import { ConversationResponseDto, Message, MessageDto } from "../../api/types";

export const getMessages = (convId: string): Promise<Message[]> => {
   return axiosInstance.get(`message/${convId}`);
};

export const postMessage = (payload: MessageDto): Promise<Message> => {
   return axiosInstance.post("message/", payload);
};

export const getConvById = async (
   convId: string
): Promise<ConversationResponseDto> => {
   const res: any = await axiosInstance.get(`conversation/${convId}`);
   console.log(res);
   return res;
};
