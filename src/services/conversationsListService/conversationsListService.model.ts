import { ConversationResponseDto } from "../../api/types";
import { getConversations } from "./conversationsListService.api";
import { createGate } from "effector-react";
import { createDomain, forward, sample } from "effector";

const domain = createDomain("conversationsListService");

const getConversationsFx = domain.createEffect<
   string,
   ConversationResponseDto[],
   Error
>(getConversations);
const handleGetConversations = domain.createEvent<string>();
const $conversations = domain.createStore<ConversationResponseDto[]>([]);

forward({
   from: handleGetConversations,
   to: getConversationsFx,
});

$conversations.on(getConversationsFx.doneData, (_, convs) => convs);

const ConvListGate = createGate<{ userId: string }>();
sample({
   clock: ConvListGate.state,
   fn: (clocksTransmit) => {
      console.log(clocksTransmit.userId);
      return clocksTransmit.userId;
   },
   target: getConversationsFx,
});

export const conversationsListService = {
   inputs: { handleGetConversations },
   outputs: { $conversations },
   gates: { ConvListGate },
};
