import { useEvent, useStore } from "effector-react";
import React, { FC } from "react";
import { registrationService } from "./registrationService.model";
import { RegistrationForm } from "./view/RegistrationForm";

type props = {
  setIsRegistered:(payload:boolean) => void
}

export const RegistrationContainer:FC<props> = ({ setIsRegistered }) => {
const handleRegisterUser = useEvent(registrationService.inputs.handleRegisterUser)
const isLoading = useStore(registrationService.outputs.$isLoading)

   return (
      <>
         <RegistrationForm setIsRegistered={setIsRegistered} handleRegisterUser={handleRegisterUser} isLoading={isLoading}/>
      </>
   );
};
