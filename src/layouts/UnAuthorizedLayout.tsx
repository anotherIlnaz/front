import { Outlet } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/elblem.png";

const Wrapper = styled.div`
   width: 100%;
   height: 100vh;

   background-color: #141414;
`;

const LogoSc = styled.img`
   width: 100px;
   color: #fff;
`;

export const UnAuthorizedLayout = () => {
   return (
      <Wrapper>
         {/* <LogoSc src={logo} /> */}
         <Outlet />
      </Wrapper>
   );
};
