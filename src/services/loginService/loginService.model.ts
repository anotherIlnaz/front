import { createDomain } from 'effector';
import { CreateUserDto } from '../../api/types';
import { loginUser } from './loginService.api';

const domain = createDomain(
  'loginService'
);

const registerUserFx = domain.createEffect<CreateUserDto, void>(loginUser);

const handleRegisterUser = domain.createEvent<CreateUserDto>();

forward({
   from: handleRegisterUser,
   to: registerUserFx,
});

const $isLoading = registerUserFx.pending;

const handleRegistrationComplete = registerUserFx.doneData;

export const loginService = {
  inputs: {
  
  },
  outputs: {

  },
};
