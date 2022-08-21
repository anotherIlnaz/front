import { useStore } from "effector-react";
import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthorizedLayout } from "./layouts/AuthorizedLayout";
import { UnAuthorizedLayout } from "./layouts/UnAuthorizedLayout";
import { MainChatPage } from "./pages/MainChatPage";
import { WelcomePage } from "./pages/WelcomePage";
import { LoginContainer, loginService } from "./services/loginService";
import { RegistrationContainer } from "./services/registrationService";

export const App = () => {
   // const isLogin = useStore(loginService.outputs.$isLogin);
   const isLogin = false;
   const [isRegistered, setIsRegistered] = useState(false);
   return (
      <>
         <BrowserRouter>
            <Routes>
               {isLogin ? (
                  <Route element={<AuthorizedLayout />}>
                     <Route element={<MainChatPage />} path="/chat" />
                     <Route
                        path="*"
                        element={<Navigate to="/chat" replace />}
                     />
                  </Route>
               ) : (
                  <Route element={<UnAuthorizedLayout />}>
                     <Route
                        path="/login"
                        element={
                           <LoginContainer setIsRegistered={setIsRegistered} />
                        }
                     />

                     <Route
                        path="/registration"
                        element={
                           <RegistrationContainer
                              setIsRegistered={setIsRegistered}
                           />
                        }
                     />
                     <Route
                        path="*"
                        element={<Navigate to="/registration" replace />}
                     />
                  </Route>
               )}
            </Routes>
         </BrowserRouter>
      </>
   );
};
