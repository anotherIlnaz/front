import { createDomain, forward } from "effector";
import { CreateUserDto, SignInDto, SignInResponseDto } from "../../api/types";
import { loginUser } from "./loginService.api";

const domain = createDomain("loginService");

const $isLogin = domain.store(false);

const loginUserFx = domain.createEffect<SignInDto, SignInResponseDto, Error>(
   loginUser
);

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
const handleLogout = domain.event();

$isLogin.on(handleLoginComplete, () => true).reset(handleLogout);

export const loginService = {
   inputs: {
      handleRegisterUser,
   },
   outputs: {
      $isLoading,
      $isLogin,
   },
};
