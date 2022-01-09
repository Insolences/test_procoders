import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import styles from "./LoginPageContainer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import authenticationActions from "../../store/actions/authenticationActions";
import { useNavigate } from "react-router-dom";
import { useEventListener } from "../../hooks/useEventListener";

const initFormFields = {
  email: "",
  password: "",
  validation: {
    isFirstValid: true,
  },
};

export const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const passRef = useRef();

  const [formFields, setFormFields] = useState(initFormFields);
  const [isValid, setIsValid] = useState({ email: false, password: false });

  const { isFirstValid } = formFields.validation;
  const { isAuth, isLoading } = useSelector((state) => state.authentication);

  const emailRex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    const { email, password } = formFields;

    toggleFirstValid();
    if (isValid.email && isValid.password) {
      dispatch(authenticationActions.singIn());
      dispatch(authenticationActions.requestSignIn({ email, password }));
    }
  };

  const toggleFirstValid = () => {
    setFormFields({
      ...formFields,
      validation: {
        isFirstValid: false,
      },
    });
  };

  const focusHelper = (event) => {
    if (event.keyCode === 13) {
      event.target.id === "email" && passRef.current.focus();
      event.target.id === "password" && formFields.password && handleSubmit();
    }
  };

  useEventListener("keydown", focusHelper);

  useEffect(() => {
    setIsValid({
      email: emailRex.test(formFields.email),
      password: !!formFields.password,
    });
  }, [formFields]);

  useEffect(() => {
    setFormFields(initFormFields);
    isAuth && navigate("/profile");
  }, [isAuth]);

  return (
    <div className={styles.loginContainer}>
      <h1>Sign In</h1>
      <Form className={styles.form}>
        <FormGroup className={styles.formContainer}>
          <Label for="email">Email</Label>
          <Input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            bsSize="lg"
            value={formFields.email}
            invalid={!isValid.email && !isFirstValid}
            placeholder="example@example.com"
            onChange={handleChange}
          />
          <FormFeedback>Please enter a correct email.</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            innerRef={passRef}
            bsSize="lg"
            type="password"
            name="password"
            value={formFields.password}
            id="password"
            placeholder="enter password"
            invalid={!isValid.password && !isFirstValid}
            onChange={handleChange}
          />
          <FormFeedback>Enter password</FormFeedback>
          <div className={styles.buttonContainer}>
            <Button
              color="primary"
              onClick={handleSubmit}
              disabled={!isValid.email || !isValid.password || isLoading}
            >
              {!isLoading ? "Sign in" : "Submitting..."}
            </Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
};
