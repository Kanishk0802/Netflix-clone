import React, { useState } from "react";
import SignupScreen from "./SignupScreen"
import "./LoginScreen.css";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

        <button
          onClick={() => {
            setSignIn(true);
          }}
          className="signInButton"
        >
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more</h1>
            <br />
            <h3>Watch anywhere, cancel anytime.</h3>
            <br />
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <br />
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => {
                    setSignIn(true);
                  }}
                  className="getStartedButton"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
