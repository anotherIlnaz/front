import { useStore } from "effector-react";
import React from "react";
import { conversationsListService } from "./conversationsListService.model";
import { ConversationsList } from "./view/ConversationsList";

export const ConversationsListContainer = () => {
   const convs = useStore(conversationsListService.outputs.$conversations);

   return (
      <>
         <ConversationsList convs={convs}/>
      </>
   );
};
