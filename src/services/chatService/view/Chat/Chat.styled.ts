import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   width: 60%;
   margin-top: 10px;
   background-color: #222222;

   border: 2px solid #333333;
   border-radius: 8px;
   padding: 10px;

   justify-content: end;
`;

export const ScrollWrapper = styled.div`
   overflow-y: scroll;
   overflow-x: hidden;

   ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
   }
   ::-webkit-scrollbar-track {
      box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
      background-color: inherit;
      border-radius: 5px;
   }
   ::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: linear-gradient(180deg, #222222, #141414);
      max-height: 20px;
   }
`;
