import { Chat } from "../services/chatService/view/Chat";
import {
   ConversationsListContainer,
   conversationsListService,
} from "../services/conversationsListService";
import styled from "styled-components";
import { useEffect, useState, useMemo, useRef } from "react";
import { loginService } from "../services/loginService";
import { socketInstance } from "../services/chatService/chatService.socket";
import { useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { chatService } from "../services/chatService";
import { io } from "socket.io-client";

const Container = styled.div`
   width: 100%;
   background-color: #141414;

   padding-left: 5vw;
   padding-right: 5vw;
`;
const Grid = styled.div`
   display: flex;
   height: 100%;
`;
export const NonChosenChat = styled.div`
   font-size: 26px;
   color: #3d3d3d;
   border: 2px solid #333333;
   height: min-content;
   padding: 20px 50px;
   border-radius: 10px;
   margin: auto;

   user-select: none;
`;

export const MainChatPage = () => {
   useEffect(() => loginService.inputs.loadUser(), []);
   const userId = useStore(loginService.outputs.$userData)?.id;

   const socket = useRef(socketInstance);

   useEffect(() => {
      userId && socket.current.emit("addUser", userId);
      socket.current.on("getUsers", (users) => console.log(users));
   }, [userId]);

   const senderId = userId;
   const newMessage = useStore(chatService.outputs.$newMessage);
   const conversatoins = useStore(
      conversationsListService.outputs.$conversations
   );
   const { convId } = useParams<{ convId: string }>();
   const currentConv = conversatoins.find((conv) => conv.id === convId);
   currentConv &&
      socket.current.emit("sendMessage", {
         senderId: senderId,
         receiverId: currentConv.companion.id,
         text: newMessage.text,
      });
   useEffect(() => {
      socket.current.on("getMessage", (data) => {
         console.log(data);
      });
   }, []);

   return (
      <Container>
         <Grid>
            <ConversationsListContainer />
            <Chat />
         </Grid>
      </Container>
   );
};
