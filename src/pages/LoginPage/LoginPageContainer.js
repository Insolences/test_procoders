import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Alert,
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
  const [isValid, setIsValid] = useState(true);

  const { isFirstValid } = formFields.validation;
  const { isAuth, isLoading, status, message } = useSelector(
    (state) => state.authentication
  );

  const [openNotification, setOpenNotification] = useState(status === "err");

  const emailRex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    const { email, password } = formFields;

    validateEmail();
    if (isValid) {
      dispatch(authenticationActions.singIn());
      dispatch(authenticationActions.requestSignIn({ email, password }));
    }
  };

  const validateEmail = () => {
    setFormFields({
      ...formFields,
      validation: {
        isFirstValid: false,
      },
    });
  };

  const escFunction = (event) => {
    if (event.keyCode === 13) {
      event.target.id === "email" && passRef.current.focus();
      event.target.id === "password" && formFields.password && handleSubmit();
    }
  };

  useEventListener("keydown", escFunction);

  useEffect(() => {
    if (emailRex.test(formFields.email)) {
      return setIsValid(true);
    }
    if (isFirstValid && emailRex.test(formFields.email)) {
      return setIsValid(true);
    }
    if (!emailRex.test(formFields.email)) {
      return setIsValid(false);
    }
  }, [formFields]);

  useEffect(() => {
    isAuth && navigate("/profile");
  }, [isAuth]);

  useEffect(() => {
    if (status === "err") {
      setOpenNotification(true);
    }
  }, [status]);

  return (
    <div className={styles.loginContainer}>
      <h2>Sign In</h2>
      <Form className="form">
        <FormGroup className={styles.formContainer}>
          <Label for="email">Email</Label>
          <Input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            bsSize="lg"
            value={formFields.email}
            invalid={!isValid && !isFirstValid}
            placeholder="example@example.com"
            onChange={handleChange}
          />
          <FormFeedback>Please input a correct email.</FormFeedback>
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
            onChange={handleChange}
          />
        </FormGroup>
        {status === "err" && (
          <div className={styles.alertNotification}>
            <Alert
              className={styles.alertNotification}
              isOpen={openNotification}
              color="danger"
              toggle={() => setOpenNotification(false)}
            >
              {message}
            </Alert>
          </div>
        )}
        <div className={styles.buttonContainer}>
          <Button
            color="primary"
            onClick={handleSubmit}
            disabled={!isValid && !isFirstValid}
          >
            {!isLoading ? "Sign in" : "Submitting..."}
          </Button>
        </div>
      </Form>
    </div>
  );
};
