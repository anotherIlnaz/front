import { useEvent, useStore } from "effector-react";
import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NonChosenChat } from "../../../../pages/MainChatPage";
import { chatService } from "../../chatService.model";
import { Wrapper } from "./Chat.styled";
import { ChatProps } from "./Chat.types";
import { InputBlock } from "./InputBlock";
import { Message } from "./Message";

export const Chat: FC<ChatProps> = ({}) => {
   const { convId } = useParams<{ convId: string }>();

   const messages = useStore(chatService.outputs.$messages);
   const handleMessages = useEvent(chatService.inputs.handleMessages);

   useEffect(() => {
      if (convId) handleMessages(convId);
   }, [convId]);

   return convId ? (
      <Wrapper>
         {messages.map((message) => (
            <Message message={message} key={message.id} />
         ))}

         <InputBlock />
      </Wrapper>
   ) : (
      <NonChosenChat> Choose chat </NonChosenChat>
   );
};
