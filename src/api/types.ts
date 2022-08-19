

export interface CreateUserDto {
   name: string;
   email: string;
   password: string;
   passwordConfirmation: string;
}

export interface SignInDto {
   email: string;
   password: string;
}

export interface SignInResponseDto {
   access: string;
}

export interface UserResponseDto {
   id: string;
   name: string;
   email: string;
   avatar: string;
}

export interface PatchUserDto {
   name?: string;
   email?: string;
   avatar: string;
}

