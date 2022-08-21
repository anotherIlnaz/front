export interface CreateUserDto {
   username: string;
   password: string;
}

export interface SignInDto {
   username: string;
   password: string;
}

export interface SignInResponseDto {
   access: string;
}

export interface UserResponseDto {
   id: string;
   username: string;
   avatar: string;
}

export interface PatchUserDto {
   password?: string;
   username?: string;
   avatar?: string;
}
