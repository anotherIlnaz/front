import React, { FC } from "react";
import { Conversation } from "./Conversation/Conversation";
import { SearchSc, Wrapper } from "./ConversationsList.styled";
import { ConversationsListProps } from "./ConversationsList.types";

export const ConversationsList: FC<ConversationsListProps> = ({}) => {
   return (
      <Wrapper>
         <SearchSc placeholder="search?" />
         <Conversation />
      </Wrapper>
   );
};
