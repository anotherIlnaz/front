import React, { FC } from "react";
import { LoginForm } from "./view/LoginForm";

type props = {
   setIsRegistered: (payload: boolean) => void;
};

export const LoginContainer: FC<props> = ({ setIsRegistered }) => {
   return (
      <>
         <LoginForm setIsRegistered={setIsRegistered} />
      </>
   );
};
