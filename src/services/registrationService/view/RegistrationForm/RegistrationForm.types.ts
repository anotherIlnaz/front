import { CreateUserDto } from "../../../../api/types";

export type RegistrationFormProps = {
   handleRegisterUser: (payload: CreateUserDto) => void;
   isLoading: boolean;
};
