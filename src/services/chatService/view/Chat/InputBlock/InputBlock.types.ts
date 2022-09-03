import { MessageDto } from "../../../../../api/types";

export type InputBlockProps = {
   sendMessage: () => void;
   messageText: string;
   setMessageText: (message: string) => void;
};
