import React, { FC } from "react";
import { Avatar, Date, LastMessage, Name, TextBlog, Wrapper } from "./Conversation.styled";
import { ConversationProps } from "./Conversation.types";
import avatar from "../../../../../assets/P90106-150115.jpg"

export const Conversation: FC<ConversationProps> = ({}) => {
   return (
      <Wrapper>
            <Avatar src={avatar}/>
         <TextBlog>
            <Name>Zion <Date>20:26</Date> </Name>
            <LastMessage>Hi, how are you?</LastMessage>
         </TextBlog>
      </Wrapper>
   );
};
