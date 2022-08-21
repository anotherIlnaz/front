import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthorizedLayout } from "./layouts/AuthorizedLayout";
import { UnAuthorizedLayout } from "./layouts/UnAuthorizedLayout";
import { MainChatPage } from "./pages/MainChatPage";
import { LoginContainer } from "./services/loginService";
import { RegistrationContainer } from "./services/registrationService";

export const App = () => {
   // const isLogin = useStore(loginService.outputs.$isLogin);
   const isLogin = false;
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
                     <Route path="/login" element={<LoginContainer />} />

                     <Route
                        path="/registration"
                        element={
                           <RegistrationContainer
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
