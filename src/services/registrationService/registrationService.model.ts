import { createDomain, forward } from "effector";
import { CreateUserDto } from "../../api/types";
import { registerUser } from "./registrationService.api";

const domain = createDomain("registrationService");

const registerUserFx = domain.createEffect<CreateUserDto, void>(registerUser);

const handleRegisterUser = domain.createEvent<CreateUserDto>();

forward({
   from: handleRegisterUser,
   to: registerUserFx,
});

const $isLoading = registerUserFx.pending;

const handleRegistrationComplete = registerUserFx.doneData;

export const registrationService = {
   inputs: {
      handleRegistrationComplete,
      handleRegisterUser,
   },
   outputs: {
      $isLoading,
   },
};
