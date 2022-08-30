import { useStore } from "effector-react";
import { FC } from "react";
import { chatService } from "../../chatService.model";
import { Wrapper } from "./Chat.styled";
import { ChatProps } from "./Chat.types";
import { InputBlock } from "./InputBlock";
import { Message } from "./Message";

export const Chat: FC<ChatProps> = ({}) => {
   const messages = useStore(chatService.outputs.$messages);

   return (
      <Wrapper>
         {messages.map((message) => (
            <Message message={message} key={message.id} />
         ))}

         <InputBlock />
      </Wrapper>
   );
};
