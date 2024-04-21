import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const emailId = useId();
  const passwordId = useId();

  const FeedbackSchema = Yup.object().shape({
   email: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  return (
    <Formik initialValues={initialValues} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label className={css.formTitle} htmlFor={emailId}>
          Email
        </label>
        <Field
          className={css.formInput}
          type="email"
          name="email"
          id={emailId}
        />
        <ErrorMessage
          className={css.errorMassage}
          name="email"
          component="span"
        />
        <label className={css.formTitle} htmlFor={passwordId}>
          Password
        </label>
        <Field
          className={css.formInput}
          type="password"
          name="password"
          id={passwordId}
        />
        <ErrorMessage
          className={css.errorMassage}
          name="password"
          component="span"
        />
        <button className={css.formBtn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
