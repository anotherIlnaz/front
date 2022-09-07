import { Chat } from "../services/chatService/view/Chat";
import { ConversationsListContainer } from "../services/conversationsListService";
import styled from "styled-components";
import { useCallback, useEffect, useRef } from "react";
import { loginService } from "../services/loginService";
import { socketInstance } from "../services/chatService/chatService.socket";
import { useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { chatService } from "../services/chatService";

export const MainChatPage = () => {
   useEffect(() => loginService.inputs.loadUser(), []);

   const { convId } = useParams<{ convId: string }>();

   useEffect(() => {
      if (convId) {
         chatService.inputs.getConv(convId);
      }
   }, [convId]);

   const userId = useStore(loginService.outputs.$userData)?.id;

   const socket = useRef(socketInstance);

   useEffect(() => {
      if (!userId) return;

      socket.current.emit("addUser", userId);
   }, [userId]);

   const senderId = userId;

   const conversation = useStore(chatService.outputs.$conv);

   const handleSendMessage = useCallback(
      (messageText: string) => {
         console.log(conversation);
         socket.current.emit("sendMessage", {
            senderId: senderId,
            receiverId: conversation?.companion.id,
            text: messageText,
            convId,
         });
      },
      [senderId, conversation?.companion.id, convId]
   );

   useEffect(() => {
      return chatService.inputs.sendMessage.watch(handleSendMessage)
         .unsubscribe;
   }, []);

   useEffect(() => {
      socket.current.on("getMessage", (data) => {
         chatService.inputs.getMessage(data);
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
