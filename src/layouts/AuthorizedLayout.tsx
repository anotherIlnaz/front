import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../shared/NavBar";

const Wrapper = styled.div`
   overflow: hidden;
`;

export const PageWrapper = styled.div`
   display: flex;
   height: calc(100vh - 60px);
`;

export const AuthorizedLayout = () => {
   return (
      <Wrapper>
         <NavBar />

         <PageWrapper>
            <Outlet />
         </PageWrapper>
      </Wrapper>
   );
};
