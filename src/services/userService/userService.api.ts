import { axiosInstance } from "../../api/axios";
import { UserResponseDto } from "../../api/types";

export const getUser =  (userId: string): Promise<UserResponseDto> => {
   return  axiosInstance.get(`user?userId=${userId}`);
};
