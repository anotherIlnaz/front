import { useEvent, useStore } from "effector-react";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NonChosenChat } from "../../../../pages/MainChatPage";
import { chatService } from "../../chatService.model";
import { ScrollWrapper, Wrapper } from "./Chat.styled";
import { ChatProps } from "./Chat.types";
import { InputBlock } from "./InputBlock";
import { Message } from "./Message";
import { io } from "socket.io-client";

export const Chat: FC<ChatProps> = ({}) => {
   const { convId } = useParams<{ convId: string }>();

   const messages = useStore(chatService.outputs.$messages);
   const messageText = useStore(chatService.outputs.$messageText);
   const handleMessages = useEvent(chatService.inputs.handleMessages);

   useEffect(() => {
      if (convId) handleMessages(convId);
   }, [convId]);

   const sendMessage = useEvent(chatService.inputs.sendMessage);
   const setMessageText = useEvent(chatService.inputs.setMessageText);

   const ConvIdGate = chatService.gates.ConvIdGate;

   const lastMessageId = messages.at(-1)?.id;
   useEffect(() => {
      if (!lastMessageId) {
         return;
      }
      const lastMessageElement = document.getElementById(lastMessageId);
      if (!lastMessageElement) {
         return;
      }
      lastMessageElement.scrollIntoView();
   }, [messages]);

   return convId ? (
      <>
         <ConvIdGate convId={convId} />
         <Wrapper>
            <ScrollWrapper>
               {messages.map((message) => (
                  <Message message={message} key={message.id} />
               ))}
            </ScrollWrapper>

            <InputBlock
               sendMessage={sendMessage}
               messageText={messageText}
               setMessageText={setMessageText}
            />
         </Wrapper>
      </>
   ) : (
      <NonChosenChat> Choose chat </NonChosenChat>
   );
};
