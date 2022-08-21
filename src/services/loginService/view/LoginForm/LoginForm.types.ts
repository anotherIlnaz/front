import { CreateUserDto } from "../../../../api/types";

export type LoginFormProps = {
   isLoading:boolean
   handleRegisterUser:(payload:CreateUserDto) => void
};
