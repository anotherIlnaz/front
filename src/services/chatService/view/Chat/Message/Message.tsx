import { FC } from "react";
import { format } from "timeago.js";
import { Avatar } from "../../../../conversationsListService/view/ConversationsList/Conversation/Conversation.styled";
import { Date, Name, Text, TextBlog, Wrapper } from "./Message.styled";
import { MessageProps } from "./Message.types";
import avatar from "../../../../../assets/P90106-150115.jpg";

export const Message: FC<MessageProps> = ({ message }) => {
   return (
      <Wrapper id={message.id}>
         <div>
            <Avatar src={avatar} />
         </div>
         <TextBlog>
            <Name>
               {message.sender.username}
               <Date>{format(message.updatedAt)}</Date>
            </Name>
            <Text>{message.text}</Text>
         </TextBlog>
      </Wrapper>
   );
};
