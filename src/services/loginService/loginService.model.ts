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

const setIsLogin = domain.createEvent();

$isLogin
   .on(handleLoginComplete, () => true)
   .on(setIsLogin, () => true)
   .reset(handleLogout);
const access = localStorage.getItem("access");
if (access) setIsLogin();
handleLogout.watch(() => localStorage.clear());

export const loginService = {
   inputs: {
      handleRegisterUser,
      handleLogout,
   },
   outputs: {
      $isLoading,
      $isLogin,
   },
};
