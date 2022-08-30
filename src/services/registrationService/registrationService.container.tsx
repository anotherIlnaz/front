import { useEvent, useStore } from "effector-react";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { registrationService } from "./registrationService.model";
import { RegistrationForm } from "./view/RegistrationForm";

export const RegistrationContainer = () => {
   const handleRegisterUser = useEvent(
      registrationService.inputs.handleRegisterUser
   );
   const isLoading = useStore(registrationService.outputs.$isLoading);

   const handleRegistrationComplete = registrationService.inputs.handleRegistrationComplete;

   const nav = useNavigate();

   useEffect(
      () => handleRegistrationComplete.watch(() => nav("/login")).unsubscribe,
      []
   );

   return (
      <>
         <RegistrationForm
            handleRegisterUser={handleRegisterUser}
            isLoading={isLoading}
         />
      </>
   );
};
