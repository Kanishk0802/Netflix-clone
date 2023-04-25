import React from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
    )
      .then((authUser)=>{
        console.log(authUser);
      })
      .catch((error)=>{
        console.log(error);
      })
  };
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen__gray">New to Netflix?</span>{" "}
          <span className="signupScreen__link" onClick={register}>
            Sign up Now
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupScreen;
