import React from "react";
import "./form.scss";
import Field from "./Field/Field";
import Checkbox from "./Checkbox/Checkbox";
import Button from "../Button/Button";

function Form() {
  return (
    <form className="form">
      <h1 className="form__title">Account Login</h1>
      <fieldset className="form__fieldset">
      <Field title="E-Mail" type="email" />
      <Field title="Password" type="password" />
      <Checkbox option="Запомнить меня" />
      </fieldset>

      <Button>Login</Button>
    </form>
  );
}

export default Form;
