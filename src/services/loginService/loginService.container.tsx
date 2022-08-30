import { useEvent, useStore } from "effector-react";
import React, { FC } from "react";
import { loginService } from "./loginService.model";
import { LoginForm } from "./view/LoginForm";


export const LoginContainer = () => {
   const handleRegisterUser = useEvent(loginService.inputs.handleRegisterUser)
   const isLoading = useStore(loginService.outputs.$isLoading)
   return (
      <>
         <LoginForm  handleRegisterUser={handleRegisterUser} isLoading={isLoading}/>
      </>
   );
};
