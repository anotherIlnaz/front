import  { FC } from "react";
import {  Formik } from "formik";
import * as yup from "yup";
import { ErrorMessage, Form, FormItemWrapper, InputSc, StyledButton, Text1, Text2, TextBlock, Wrapper } from "./RegistrationForm.styled";
import { LoginFormProps } from "./LoginForm.types";
import { useNavigate } from "react-router-dom";

const validationsSchema = yup.object().shape({
   username: yup.string().required("Required field"),

   password: yup.string().required("Required field"),
   
});

export const LoginForm: FC<LoginFormProps> = ({
  handleLoginUser
   setIsRegistered,
   isLoading,
}) => {

  const nav = useNavigate()

   return (
      <Wrapper>
         <Formik
            initialValues={{
               username: "",
               password: "",
            }}
            onSubmit={(values) => {
               handleLoginUser({
                  password: values.password,
                  username: values.username,
               });
            }}
            validateOnBlur
            validationSchema={validationsSchema}
         >
            {({
               values,
               errors,
               touched,
               handleChange,
               handleBlur,
               isValid,
               handleSubmit,
               dirty,
            }) => (
               <Form>
                  <FormItemWrapper>
                     <InputSc
                        type={"text"}
                        name={"username"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.username}
                        placeholder="username_"
                     />

                     {touched.username && (
                        <ErrorMessage text={errors.username} />
                     )}
                  </FormItemWrapper>

                  <FormItemWrapper>
                     <InputSc
                        type={"password"}
                        name={"password"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="password_"
                     />
                     {touched.password && (
                        <ErrorMessage text={errors.password} />
                     )}
                  </FormItemWrapper>

                  <StyledButton
                     disabled={(!isValid && !dirty) || isLoading}
                     onClick={() => handleSubmit()}
                     type={"submit"}
                  >
                     Sign in
                  </StyledButton>
                  <TextBlock>
                     <Text1> Dont have account? </Text1>
                     <Text2 onClick={() => nav("/registration")}>Sign up</Text2>
                  </TextBlock>
               </Form>
            )}
         </Formik>
      </Wrapper>
   );
};
