import { FC } from "react";
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
import { useNavigate } from "react-router-dom";
import { object, ref, string } from "yup";
import { Formik } from "formik";

const validationsSchema = object().shape({
   username: string().required("Required field"),

   password: string().required("Required field"),
   passwordConfirmation: string()
      .oneOf([ref("password")], "Passwords dont match")
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
