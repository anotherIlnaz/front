import { useStore } from "effector-react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthorizedLayout } from "./layouts/AuthorizedLayout";
import { UnAuthorizedLayout } from "./layouts/UnAuthorizedLayout";
import { MainChatPage } from "./pages/MainChatPage";
import { LoginContainer, loginService } from "./services/loginService";
import { RegistrationContainer } from "./services/registrationService";
import 'bootstrap/dist/css/bootstrap.min.css'


export const App = () => {
   const isLogin = useStore(loginService.outputs.$isLogin);

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
                        element={<RegistrationContainer />}
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
