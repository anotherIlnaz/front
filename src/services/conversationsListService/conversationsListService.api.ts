import { axiosInstance } from "../../api/axios";
import { ConversationResponseDto } from "../../api/types";

export const getConversations = (
   userId: string
): Promise<ConversationResponseDto[]> => {
   return axiosInstance.get(`conversation/${userId}`);
};
