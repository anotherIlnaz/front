import React, { FC } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import {
   ErrorMessage,
   Form,
   FormItemWrapper,
   InputSc,
   StyledButton,
   Text1,
   Text2,
   TextBlock,
   Wrapper,
} from "./RegistrationForm.styled";
import { RegistrationFormProps } from "./RegistrationForm.types";
import { CreateUserDto } from "../../../../api/types";
import { useNavigate } from "react-router-dom";

const validationsSchema = yup.object().shape({
   username: yup.string().required("Required field"),

   password: yup.string().required("Required field"),
   passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords dont match")
      .required("Required field"),
});

export const RegistrationForm: FC<RegistrationFormProps> = ({
   handleRegisterUser,
   isLoading,
}) => {
   const nav = useNavigate();
   return (
      <Wrapper>
         <Formik
            initialValues={{
               username: "",
               password: "",
               passwordConfirmation: "",
            }}
            onSubmit={(values) => {
               handleRegisterUser({
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

                  <FormItemWrapper>
                     <InputSc
                        type={"password"}
                        name={"passwordConfirmation"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirmation}
                        placeholder="passwordConfirmation_"
                     />
                     {touched.passwordConfirmation && (
                        <ErrorMessage text={errors.passwordConfirmation} />
                     )}
                  </FormItemWrapper>

                  <StyledButton
                     disabled={(!isValid && !dirty) || isLoading}
                     onClick={() => handleSubmit()}
                     type={"submit"}
                  >
                     Sign up
                  </StyledButton>
                  <TextBlock>
                     <Text1> Have account? </Text1>
                     <Text2 onClick={() => nav("/login")}>Sign in</Text2>
                  </TextBlock>
               </Form>
            )}
         </Formik>
      </Wrapper>
   );
};
