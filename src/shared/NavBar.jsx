import styled from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useEvent } from "effector-react";
import { loginService } from "../services/loginService";
import "../shared/forBoostrap.css";

const Container = styled.div`
   width: inherit;
   height: 60px;

   background-color: #222222;
   border: 1px solid #333333;

`;
const Wrapper = styled.div`
   width: inherit;
   height: inherit;
   padding-left: 7vw;
   padding-right: 7vw;

   display: flex;
   flex-direction: row-reverse;
   
`;

export const NavBar = () => {
   const logout = useEvent(loginService.inputs.handleLogout);
   return (
      <Container>
         <Wrapper>
            <Dropdown>
               <Dropdown.Toggle variant="dark"></Dropdown.Toggle>

               <Dropdown.Menu variant="dark">
                  <Dropdown.Item active>_chat</Dropdown.Item>
                  <Dropdown.Item>_profileSetting</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => logout()}>
                     logout_
                  </Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
         </Wrapper>
      </Container>
   );
};
