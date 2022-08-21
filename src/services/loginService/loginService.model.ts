import { createDomain, forward } from 'effector';
import { CreateUserDto } from '../../api/types';
import { loginUser } from './loginService.api';

const domain = createDomain(
  'loginService'
);

const loginUserFx = domain.createEffect<CreateUserDto, void>(loginUser);

const handleRegisterUser = domain.createEvent<CreateUserDto>();

forward({
   from: handleRegisterUser,
   to: loginUserFx,
});

const $isLoading = loginUserFx.pending;

const handleLoginComplete = loginUserFx.doneData;

export const loginService = {
  inputs: {
    handleRegisterUser
  },
  outputs: {
    $isLoading
  },
};
