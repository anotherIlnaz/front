import { FC } from "react";
import {
   Avatar,
   Date,
   LastMessage,
   Name,
   TextBlog,
   Wrapper,
} from "./Conversation.styled";
import { ConversationProps } from "./Conversation.types";
import avatar from "../../../../../assets/P90106-150115.jpg";
import { useNavigate } from "react-router-dom";

export const Conversation: FC<ConversationProps> = ({ convData }) => {
   const navigate = useNavigate();

   return (
      <Wrapper onClick={() => navigate(`/chat/${convData.id}`)}>
         <Avatar src={avatar} />
         <TextBlog>
            <Name>
               {convData.companion.username}
               <Date>{convData.updatedAt.split("T")[1]}</Date>
            </Name>
            <LastMessage>Hi, how are you?</LastMessage>
         </TextBlog>
      </Wrapper>
   );
};
