import { FC } from "react";
import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   height: 100%;
`;

export const Form = styled.div`
   
`

export const InputSc = styled.input`
   background-color: #222222;
   color: #f6eded;
   padding: 10px;
   font-size: 18px;

   border: 1px solid #333333;
`;

const StyledErrorMessageWrapper = styled.div`
   position: relative;
`;

const StyledErrorMessage = styled.div`
   color: #ff008cc3;
   font-size: 13px;
   position: absolute;
   
   margin-top:4px;
`;

export const ErrorMessage: FC<{ text?: string }> = ({ text }) => {
   return (
      <StyledErrorMessageWrapper>
         <StyledErrorMessage>{text}</StyledErrorMessage>
      </StyledErrorMessageWrapper>
   );
};

export const StyledButton = styled.button`
   width: 100%;

   color: #9a9a9a;
   font-size: 18px;

   padding: 0 1rem;
   background-color: #222222;
   line-height: 2.2;

   cursor: pointer;
   
   border: 1px solid;
   border-color: #333333;

   &:hover {
      opacity: 0.6;
      color: #ffffff;
   }
   &:active{
      opacity: 1.2;
      color: #ffffff;
   }

`;

export const FormItemWrapper = styled.div`
   margin-bottom: 20px;
`;


export const TextBlock = styled.div`
margin-top: 16px;
   display: flex;
   align-items: baseline;
   justify-content: center;
`
export const Text1 = styled.div`
   color: #9a9a9a;
   font-size: 16px;
   margin-right: 14px;
`
export const Text2 = styled.div`
   color: #5a7395;
   font-size: 18px;
   text-decoration: underline;
`