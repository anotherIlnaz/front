import { axiosInstance } from "../../api/axios";
import { CreateUserDto } from "../../api/types";

export const registerUser = (payload: CreateUserDto): Promise<void> =>
   axiosInstance.post("registration", payload);
