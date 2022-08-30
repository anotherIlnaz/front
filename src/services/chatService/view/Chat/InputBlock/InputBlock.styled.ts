import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   align-items: center;

   position: relative;

   margin-bottom: 10px;
   margin-top: 10px;
`;

export const TextArea = styled.textarea`
   all: unset;

   box-sizing: border-box;
   border-radius: 10px;
   border: 2px solid #333333;
   padding: 10px;
   background-color: #3d3d3d;
   resize: none;
   max-height: 40px;
   width: 100%;

   font-family: inherit;
   font-size: 18px;
   color: #e2e3e5;
   font-weight: 100;

   ::-webkit-scrollbar {
      width: 0;
   }
`;

export const EmodjiSc = styled.div`
   position: absolute;
   bottom: 2px;
   right: 36px;
`;

export const SmileImage = styled.div`
   width: 40px;
   cursor: pointer;
`;
