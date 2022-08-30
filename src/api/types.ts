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
   roles: string;
}

export interface PatchUserDto {
   password?: string;
   username?: string;
   avatar?: string;
}

export interface ConversationResponseDto {
   id: string;
   updatedAt: string;
   companion: Companion;
}
export interface Companion {
   username: string;
   roles: string[];
   id: string;
}

// export interface ConversationsResponseDto {
//     ConversationResponseDto[];
// }

export interface Message {
   id: string;
   sender: {
      id: string;
      username: string;
   };
   text: string;
   updatedAt: string;
}
