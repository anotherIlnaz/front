import styled from "styled-components";
import { Chat } from "../services/chatService/view/Chat";
import { ConversationsList } from "../services/conversationsListService/view/ConversationsList";

const Container = styled.div`
   box-sizing: border-box;
   width: 100%;
   height: 100vh ;
   

   background-color: #141414;
   padding-left: 5vw;
   padding-right: 5vw;

`;
const Grid = styled.div`
   display: flex;
   height: 100%;
   max-height: 100vh;
`;

export const MainChatPage = () => {
   return (
      <Container>
         <Grid>
            <ConversationsList />
            <Chat />
         </Grid>
      </Container>
   );
};
