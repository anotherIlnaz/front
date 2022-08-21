import { useEvent, useStore } from "effector-react";
import React, { FC } from "react";
import { registrationService } from "./registrationService.model";
import { RegistrationForm } from "./view/RegistrationForm";



export const RegistrationContainer = () => {
   const handleRegisterUser = useEvent(
      registrationService.inputs.handleRegisterUser
   );
   const isLoading = useStore(registrationService.outputs.$isLoading);

   return (
      <>
         <RegistrationForm
            handleRegisterUser={handleRegisterUser}
            isLoading={isLoading}
         />
      </>
   );
};
