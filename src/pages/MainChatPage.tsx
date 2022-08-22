import styled from "styled-components";
import { Chat } from "../services/chatService/view/Chat";
import { ConversationsList } from "../services/conversationsListService/view/ConversationsList";

const Container = styled.div``
const Grid = styled.div``;

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
