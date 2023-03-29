import './Login.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import login from "../assets/login.svg";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "teste",
      password: "123"
    },
  ];

  const errors = {
    uname: "Email errado",
    pass: "Senha errada"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Senha </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

    return (
        <div className="login">
            <div className="login-container">
                <div className="brand-side">
                    <h1 className="brand-title">Bem-vindo(a) ao PayMonitor!</h1>
                    <img src={login} className="brand-logo"/>
                </div>
                <div className="form-side">
                    <h1 className="form-title">Faça seu login!</h1>
                    <div className="form-text-field">
                    {isSubmitted ? <div>Login com sucesso!</div> : renderForm}
                    </div>
                    <p>Ainda não possui uma conta? <a href="./register.html">Cadastre-se</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;