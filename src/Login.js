import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <Button onClick={signIn}>Sign in with Google</Button>
    </div>
  );
}

export default Login;
