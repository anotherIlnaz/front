import { Chat } from "../services/chatService/view/Chat";
import { ConversationsListContainer } from "../services/conversationsListService";
import styled from "styled-components";
import { useEffect } from "react";
import { loginService } from "../services/loginService";
import { socket } from "../services/chatService/chatService.socket";
import { useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { chatService } from "../services/chatService";

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

   useEffect(() => {
      socket.emit("addUser", userId);
      // socket.on("getUsers", (users) => console.log(users));
   }, [userId]);

   const senderId = userId;
   const { convId } = useParams<{ convId: string }>();
   const newMessage = useStore(chatService.outputs.$newMessage);

   socket.emit("sendMessage", {
      senderId: senderId,
      convId: newMessage.convId,
      text: newMessage.text,
   });

   socket.on("getMessage", (data) => {});

   return (
      <Container>
         <Grid>
            <ConversationsListContainer />
            <Chat />
         </Grid>
      </Container>
   );
};
