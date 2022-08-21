import { axiosInstance } from "../../api/axios";
import { CreateUserDto } from "../../api/types";

export const loginUser = (payload: CreateUserDto): Promise<void> =>
   axiosInstance.post("login", payload);

