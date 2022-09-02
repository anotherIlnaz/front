import { createDomain, forward } from "effector";
import { Message } from "../../api/types";
import { getMessages } from "./chatService.api";
import { io } from "socket.io-client"

const domain = createDomain("chatService");

const fetchMessagesFx = domain.createEffect(getMessages);

const handleMessages = domain.createEvent<string>();

const $messages = domain
   .createStore<Message[]>([])
   .on(fetchMessagesFx.doneData, (_, mes) => mes);

forward({
   from: handleMessages,
   to: fetchMessagesFx,
});

export const chatService = {
   inputs: { handleMessages },
   outputs: { $messages },
};

