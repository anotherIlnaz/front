import { Chat } from "../services/chatService/view/Chat";
import { loginService } from "../services/loginService";
import { useEffect } from "react";
import { ConversationsListContainer } from "../services/conversationsListService";
import styled from "styled-components";
import { useStore } from "effector-react";
import { chatService } from "../services/chatService";
const Container = styled.div`
   box-sizing: border-box;
   width: 100%;
   height: calc(100vh - 60px);

   background-color: #141414;
   padding-left: 5vw;
   padding-right: 5vw;
`;
const Grid = styled.div`
   display: flex;
   height: 100%;
   max-height: 100vh;
`;
const NonChosenChat = styled.div`
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

   const isChosen = useStore(chatService.outputs.$isChosen);
   return (
      <Container>
         <Grid>
            <ConversationsListContainer />
            {isChosen ? <Chat /> : <NonChosenChat> Choose chat </NonChosenChat>}
         </Grid>
      </Container>
   );
};
