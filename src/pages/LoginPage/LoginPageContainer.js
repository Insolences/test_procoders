import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import styles from "./LoginPageContainer.module.scss";

export const LoginPageContainer = () => {
  const initFormFields = {
    email: "",
    password: "",
    validation: {
      isOn: false,
    },
  };

  const [isSubmit, setIsSubmit] = useState(false);
  const [formFields, setFormFields] = useState(initFormFields);
  const [isValid, setIsValid] = useState(true);

  const emailRex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = () => {
    setIsSubmit(true);
    validateEmail();
  };

  const validateEmail = () => {
    setFormFields({
      ...formFields,
      validation: {
        isOn: true,
      },
    });
  };

  useEffect(() => {
    if (emailRex.test(formFields.email)) {
      setIsValid(true);
    } else setIsValid(false);
  }, [formFields]);

  return (
    <div className={styles.loginContainer}>
      {console.log(formFields)}
      <h2>Sign In</h2>
      <Form className="form">
        <FormGroup className={styles.formContainer}>
          <Label for="email">Email</Label>
          <Input
            autoComplete="off"
            type="email"
            name="email"
            id="email"
            size="lg"
            valid={isValid}
            invalid={!isValid && formFields.validation.isOn}
            placeholder="example@example.com"
            onChange={handleChange}
          />
          <FormFeedback>Please input a correct email.</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            size="lg"
            type="password"
            name="password"
            id="password"
            placeholder="enter password"
            onChange={handleChange}
          />
        </FormGroup>
        <Button
          color="primary"
          onClick={handleSubmit}
          active={!isSubmit}
          disabled={!isValid && !formFields.validation.isOn}
        >
          {!isSubmit ? "Sign in" : "Submitting..."}
        </Button>
      </Form>
    </div>
  );
};
