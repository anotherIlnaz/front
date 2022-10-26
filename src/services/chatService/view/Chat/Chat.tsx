import { useEvent, useStore } from "effector-react";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NonChosenChat } from "../../../../pages/MainChatPage";
import { chatService } from "../../chatService.model";
import { ScrollWrapper, Wrapper } from "./Chat.styled";
import { ChatProps } from "./Chat.types";
import { InputBlock } from "./InputBlock";
import { Message } from "./Message";

export const Chat: FC<ChatProps> = ({}) => {

   const forChanges = "your"

   const { convId } = useParams<{ convId: string }>();
   const [messageText, setMessageText] = useState("");

   const messages = useStore(chatService.outputs.$messages);
   const loadMessages = useEvent(chatService.inputs.loadMessages);

   useEffect(() => {
      if (convId) loadMessages(convId);
   }, [convId]);

   const sendMessage = useEvent(chatService.inputs.sendMessage);

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

   const forPullRequest = "pull"

   return convId ? (
      <>
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
      <NonChosenChat>Choose chat</NonChosenChat>
   );
};
