import { combine, createDomain, forward, sample } from "effector";
import { createGate } from "effector-react";
import { Message, MessageDto } from "../../api/types";
import { getMessages, postMessage } from "./chatService.api";

const domain = createDomain("chatService");

const fetchMessagesFx = domain.createEffect(getMessages);
const sendMessageFx = domain.createEffect<MessageDto, Message>(postMessage);

const handleMessages = domain.createEvent<string>();

const setMessageText = domain.event<string>();
const clearMessageText = domain.event();
const $messageText = domain
   .store("")
   .on(setMessageText, (_, text) => text)
   .reset(clearMessageText);

const sendMessage = domain.createEvent();
const $newMessage = domain
   .createStore<MessageDto>({ text: "", convId: "" })
   .on(sendMessage, (_, message) => message);

const ConvIdGate = createGate<{ convId: string }>();

forward({
   from: handleMessages,
   to: fetchMessagesFx,
});

sample({
   source: combine($messageText, ConvIdGate.state, (text, { convId }) => ({
      text,
      convId,
   })),
   clock: sendMessage,
   target: sendMessageFx,
});

const $messages = domain
   .createStore<Message[]>([])
   .on(fetchMessagesFx.doneData, (_, mes) => mes)
   .on(sendMessageFx.doneData, (oldMessages, message) => [
      ...oldMessages,
      message,
   ]);

sendMessageFx.doneData.watch(() => clearMessageText());

export const chatService = {
   inputs: {
      handleMessages,
      sendMessage,
      setMessageText,
   },
   outputs: {
      $messages,
      $newMessage,
      $messageText,
   },
   gates: {
      ConvIdGate,
   },
};
