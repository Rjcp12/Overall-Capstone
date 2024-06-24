import React, { useState, useContext } from 'react';
import ErrorToast from '/Components/ErrorToast.jsx';
import { AuthContext } from '/Components/auth-context.js';
import ClipLoader from 'react-spinners/ClipLoader';

function Form() {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailTouched(true);
    setPasswordTouched(true);

    if (!email || !password || !email.includes('@') || password.length < 6) {
      setError('Please enter a valid email and password (min 6 characters).');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/ownerauth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }

      console.log(responseData);
      setLoading(false);
      auth.login();
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error.message || 'Something went wrong, please try again.');
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    if (emailTouched) {
      setEmailTouched(false);
    }
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    if (passwordTouched) {
      setPasswordTouched(false);
    }
  };

  return (
    <>
      {loading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <ClipLoader size={70} color={'#123abc'} loading={loading} />
        </div>
      )}
      <ErrorToast error={error} onClear={errorHandler} />

      <div className="container col-xl-10 col-xxl-8 px-2 py-2">
        <div className="row align-items-center g-lg-5 py-3">
          <div className="col-lg-7 text-center text-lg-start">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
              Vertically centered hero sign-up form
            </h1>
            <p className="col-lg-10 fs-4">
              Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
            </p>
          </div>
          <div className="col-md-10 mx-auto col-lg-5">
            <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${emailTouched && (!email || !email.includes('@')) ? 'is-invalid' : ''}`}
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={emailChangeHandler}
                />
                <label htmlFor="floatingInput">Email address</label>
                {emailTouched && (!email || !email.includes('@')) && (
                  <div className="invalid-feedback">Please enter a valid email address.</div>
                )}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${passwordTouched && password.length < 6 ? 'is-invalid' : ''}`}
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={passwordChangeHandler}
                />
                <label htmlFor="floatingPassword">Password</label>
                {passwordTouched && password.length < 6 && (
                  <div className="invalid-feedback">Password must be at least 6 characters long.</div>
                )}
              </div>
              
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Log in
              </button>
              <hr className="my-4" />
              <small className="text-body-secondary">
                By clicking Log in, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
