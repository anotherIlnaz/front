import { createDomain, forward } from "effector";
import {
   CreateUserDto,
   SignInDto,
   SignInResponseDto,
   UserResponseDto,
} from "../../api/types";
import { getUserMe, loginUser } from "./loginService.api";

const domain = createDomain("loginService");

const $isLogin = domain.store(false);
const $userData = domain.createStore<UserResponseDto | null>(null);

const loginUserFx = domain.createEffect<SignInDto, SignInResponseDto, Error>(
   loginUser
);

const loadUser = domain.createEvent()

const getUserMeFx = domain.createEffect(getUserMe);

loginUserFx.doneData.watch(({ access }) => {
   localStorage.setItem("access", access);
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

forward({
   from: loadUser,
   to: getUserMeFx,
});

$userData.on(getUserMeFx.doneData, (_, data) => data);



export const loginService = {
   inputs: {
      handleRegisterUser,
      handleLogout,
      loadUser
   },
   outputs: {
      $isLoading,
      $isLogin,
      $userData,
   },
};
