import { axiosInstance } from "../../api/axios";
import { CreateUserDto, SignInResponseDto } from "../../api/types";

export const loginUser = (payload: CreateUserDto): Promise<SignInResponseDto> =>
   axiosInstance.post("login", payload);

