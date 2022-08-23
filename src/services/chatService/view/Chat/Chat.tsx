import { FC } from "react";
import { Wrapper } from "./Chat.styled";
import { ChatProps } from "./Chat.types";
import { InputBlock } from "./InputBlock";
import { Message } from "./Message";

export const Chat: FC<ChatProps> = ({}) => {
   return (
      <Wrapper>
         <Message />
         <Message />
         <InputBlock />
      </Wrapper>
   );
};
