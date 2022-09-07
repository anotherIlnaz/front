import { createDomain, forward } from "effector";
import { ConversationResponseDto, Message } from "../../api/types";
import { getConvById, getMessages } from "./chatService.api";

const domain = createDomain("chatService");

const fetchMessagesFx = domain.createEffect(getMessages);

const loadMessages = domain.createEvent<string>();

const sendMessage = domain.createEvent<string>();

const getMessage = domain.createEvent<Message>();

const getConvFx = domain.createEffect(getConvById);

const getConv = domain.createEvent<string>();

const $conv = domain.createStore<ConversationResponseDto | null>(null);

$conv.on(getConvFx.doneData, (_, data) => data);

forward({
   from: getConv,
   to: getConvFx,
});

const $messages = domain
   .createStore<Message[]>([])
   .on(fetchMessagesFx.doneData, (_, mes) => mes)
   .on(getMessage, (prev, data) => [...prev, data]);

forward({
   from: loadMessages,
   to: fetchMessagesFx,
});

export const chatService = {
   inputs: {
      loadMessages,
      sendMessage,
      getMessage,
      getConv,
   },
   outputs: {
      $messages,
      $conv,
   },
};
