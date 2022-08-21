import { CreateUserDto } from "../../../../api/types";

export type RegistrationFormProps = {
   setIsRegistered: (payload: boolean) => void;
   handleRegisterUser: (payload: CreateUserDto) => void;
   isLoading: boolean;
};
