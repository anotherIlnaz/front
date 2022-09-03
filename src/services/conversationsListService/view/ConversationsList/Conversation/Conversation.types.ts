import {
   ConversationResponseDto,
   UserResponseDto,
} from "../../../../../api/types";

export type ConversationProps = {
   convData: ConversationResponseDto;
   userCurrent: UserResponseDto | null;
   lastMessage: string;
};
