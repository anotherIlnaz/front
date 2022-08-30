import React, { useState, FC } from "react";
import Picker, { IEmojiData } from "emoji-picker-react";
import { EmodjiSc, SmileImage } from "./InputBlock.styled";
import { IoSadOutline } from "react-icons/io5";
type props = {
   chosenEmoji: (emoji: string) => void;
};
export const Emoji: FC<props> = ({ chosenEmoji }) => {
   const onEmojiClick = (
      _: React.MouseEvent<Element, MouseEvent>,
      emojiObject: IEmojiData
   ) => {
      chosenEmoji(emojiObject.emoji);
   };

   const [togglePicker, setTogglePicker] = useState(false);

   return (
      <EmodjiSc>
         {togglePicker && <Picker onEmojiClick={onEmojiClick} preload />}
         <SmileImage onClick={() => setTogglePicker((state) => !state)}>
            <IoSadOutline size={36} />
         </SmileImage>
      </EmodjiSc>
   );
};
