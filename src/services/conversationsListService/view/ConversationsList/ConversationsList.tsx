import { useStore } from "effector-react";
import { FC, useMemo } from "react";
import { loginService } from "../../../loginService";
import { conversationsListService } from "../../conversationsListService.model";
import { Conversation } from "./Conversation/Conversation";
import { SearchSc, Wrapper } from "./ConversationsList.styled";
import { ConversationsListProps } from "./ConversationsList.types";

const ConvListGate = conversationsListService.gates.ConvListGate;

export const ConversationsList: FC<ConversationsListProps> = ({ convs }) => {
   const userCurrent = useStore(loginService.outputs.$userData);
   const convsList = useMemo(
      () =>
         convs.map((conv) => (
            <Conversation
               userCurrent={userCurrent}
               convData={conv}
               key={conv.id}
            />
         )),
      [convs]
   );

   return (
      <Wrapper>
         {userCurrent && <ConvListGate userId={userCurrent?.id} />}
         <SearchSc placeholder="search?" />
         {convsList}
      </Wrapper>
   );
};
