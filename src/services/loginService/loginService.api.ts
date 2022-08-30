import { axiosInstance } from "../../api/axios";
import { CreateUserDto, SignInResponseDto, UserResponseDto } from "../../api/types";

export const loginUser = (payload: CreateUserDto): Promise<SignInResponseDto> =>
   axiosInstance.post("login", payload);

export const getUserMe = ():Promise<UserResponseDto> => {
  return axiosInstance.get("user/me");
};
