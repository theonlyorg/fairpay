import React from 'react';

const Login = () => (
  <div>
    <h1>Be an agent of change</h1>
    <h2>
      Securely submit your salary information to understand if you or your
      coworkers are being discriminated against
    </h2>
    {/* TODO: link to LinkedIn OAuth*/}
    <a href="/auth/linkedin">
      <img
        src="https://taggbox.com/blog/wp-content/uploads/2018/09/Signin-with-LinkedIn.png"
        id="linkedinButton"
        alt="Sign in with LinkedIn"
      ></img>
    </a>
  </div>
);

export default Login;
