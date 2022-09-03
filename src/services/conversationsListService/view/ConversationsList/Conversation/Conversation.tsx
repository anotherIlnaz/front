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
import moment from "moment";

export const Conversation: FC<ConversationProps> = ({ convData,lastMessage }) => {
   const { updatedAt } = convData;
   const navigate = useNavigate();

   const preparedData = moment(updatedAt).format("DD.MM.YYYY HH:mm");

   return (
      <Wrapper onClick={() => navigate(`/chat/${convData.id}`)}>
         <Avatar src={avatar} />
         <TextBlog>
            <Name>
               {convData.companion.username}
               <Date>{preparedData}</Date>
            </Name>
            <LastMessage>{lastMessage}</LastMessage>
         </TextBlog>
      </Wrapper>
   );
};
