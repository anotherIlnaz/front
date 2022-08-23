import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   background-color: #000;
   height: 60px;
   padding: 5px;
   margin-top: 15px;
   border: 2px solid #333333;
   border-radius: 5px;

   align-items: center;
`;

export const Avatar = styled.div<{ src: string }>`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-image: url(${({ src }) => src});
   background-size: cover;
   background-repeat: no-repeat;
   background-position: 50%;
`;

export const Name = styled.div`
   display: flex;
   color: #e2e3e5;
   justify-content: space-between;
   padding-bottom: 4px;
`;

export const LastMessage = styled.div`
   color: #9a9a9a;
`;

export const TextBlog = styled.div`
   padding-left: 10px;
   width: 100%;
   cursor: pointer;
   user-select: none;
`;
export const Date = styled.div`
   color: #9a9a9a;
`;
