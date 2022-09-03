import { useEvent } from "effector-react";
import { FC, useState, useCallback } from "react";
import { IoDocumentAttach, IoSendSharp } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { chatService } from "../../../chatService.model";
import { Emoji } from "./Emoji";
import { TextArea, Wrapper } from "./InputBlock.styled";
import { InputBlockProps } from "./InputBlock.types";

export const InputBlock: FC<InputBlockProps> = ({
   sendMessage,
   messageText,
   setMessageText,
}) => {
   const takeChosenEmoji = (data: string) => setMessageText(messageText + data);

   const handleMessage = useEvent(chatService.inputs.handleMessages);
   return (
      <Wrapper>
         <TextArea
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
         />

         <Emoji chosenEmoji={takeChosenEmoji} />

         {messageText ? (
            <IoSendSharp
               size={30}
               color="#8a9795"
               style={{ marginLeft: "6px" }}
               onClick={sendMessage}
            />
         ) : (
            <IoDocumentAttach
               size={30}
               color="#8a9795"
               style={{ marginLeft: "6px" }}
            />
         )}
      </Wrapper>
   );
};
