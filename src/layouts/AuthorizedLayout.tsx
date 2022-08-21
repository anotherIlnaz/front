import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
        
`

export const AuthorizedLayout = () => {

   return (
      <Wrapper>
         <Outlet />
      </Wrapper>
   );
};
