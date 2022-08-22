import { createDomain, forward } from 'effector';
import { CreateUserDto, SignInResponseDto } from '../../api/types';
import { loginUser } from './loginService.api';

const domain = createDomain(
  'loginService'
);

const loginUserFx = domain.createEffect<CreateUserDto, SignInResponseDto, Error>(loginUser);

loginUserFx.doneData.watch(({ access }) => {
  localStorage.setItem("access", access);
  console.log(access);
});

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
