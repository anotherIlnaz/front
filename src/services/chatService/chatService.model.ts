import { createDomain, forward } from "effector";
import { Message } from "../../api/types";
import { loginService } from "../loginService";
import { getMessages } from "./chatService.api";

const domain = createDomain("chatService");

const fetchMessagesFx = domain.createEffect(getMessages);

const handleMessages = domain.createEvent<string>();

const $messages = domain
   .createStore<Message[]>([])
   .on(fetchMessagesFx.doneData, (_, mes) => mes);

const $isChosen = domain
   .createStore(false)
   .on(handleMessages, () => true)
   .reset(loginService.inputs.handleLogout);

forward({
   from: handleMessages,
   to: fetchMessagesFx,
});

export const chatService = {
   inputs: { handleMessages },
   outputs: { $messages, $isChosen },
};
