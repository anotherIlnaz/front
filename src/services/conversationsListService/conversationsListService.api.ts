import { axiosInstance } from "../../api/axios";
import { ConversationResponseDto } from "../../api/types";

export const getConversations = (): Promise<ConversationResponseDto[]> => {
   return axiosInstance.get(`conversation/all`);
};
