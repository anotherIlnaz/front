import { FC, useState } from "react";
import { Emoji } from "./Emoji";
import { TextArea, Wrapper } from "./InputBlock.styled";
import { InputBlockProps } from "./InputBlock.types";
import { IoSendSharp, IoDocumentAttach } from "react-icons/io5";

export const InputBlock: FC<InputBlockProps> = ({}) => {
   const [input, setInput] = useState("");

   const takeChosenEmoji = (data: string) => setInput((prev) => prev + data);

   return (
      <Wrapper>
         <TextArea value={input} onChange={(e) => setInput(e.target.value)} />

         <Emoji chosenEmoji={takeChosenEmoji} />

         {input ? (
            <IoSendSharp
               size={30}
               color="#8a9795"
               style={{ marginLeft: "6px" }}
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
