import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { NavBar } from "../shared/NavBar";

const Wrapper = styled.div`
   overflow: hidden;
`;

export const AuthorizedLayout = () => {
   return (
      <Wrapper>
         <NavBar />
         <Outlet />
      </Wrapper>
   );
};
