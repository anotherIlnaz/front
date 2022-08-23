import React, { FC } from "react";
import { Avatar } from "../../../../conversationsListService/view/ConversationsList/Conversation/Conversation.styled";
import { Date, Name, Text, TextBlog, Wrapper } from "./Message.styled";
import { MessageProps } from "./Message.types";
import avatar from "../../../../../assets/P90106-150115.jpg"

export const Message: FC<MessageProps> = ({}) => {
   return (
      <Wrapper>
         <Avatar src={avatar} />
         <TextBlog>
            <Name>Zion <Date>20:26</Date> </Name>
            <Text>Hi, how are you?</Text>
         </TextBlog>
      </Wrapper>
   );
};
