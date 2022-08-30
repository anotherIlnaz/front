import { useEvent } from "effector-react";
import { FC, useState } from "react";
import { IoDocumentAttach, IoSendSharp } from "react-icons/io5";
import { Emoji } from "./Emoji";
import { TextArea, Wrapper } from "./InputBlock.styled";
import { InputBlockProps } from "./InputBlock.types";

export const InputBlock: FC<InputBlockProps> = ({}) => {
   const [input, setInput] = useState("");
   
   // const messageDto = {
   //    sender:  ,
   //    text: input,
   //    conversationId:  ,
   // }

   const takeChosenEmoji = (data: string) => setInput((prev) => prev + data);

   // const handleSubmit = useEvent()

   return (
      <Wrapper>
         <TextArea value={input} onChange={(e) => setInput(e.target.value)} />

         <Emoji chosenEmoji={takeChosenEmoji} />

         {input ? (
            <IoSendSharp
               size={30}
               color="#8a9795"
               style={{ marginLeft: "6px" }}
               // onClick={() => handleSubmit(messageDto)}
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
