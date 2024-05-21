import { useState , useContext } from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { AuthContext } from './../auth-context';
import ErrorModal from './../Shared/ErrorModal';
import ClipLoader from "react-spinners/ClipLoader";
import { useHttpClient } from './../http-hook.js';

function BasicExample() {
  const auth = useContext(AuthContext);
  const { loading, error, sendRequest, clearError } = useHttpClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseData = await sendRequest(
        'http://localhost:5000/api/superadmin/login',
        'POST',
        JSON.stringify({
          email: email,
          password: password
        }),
        {
          'Content-Type': 'application/json'
        }
      );
      auth.login(responseData.userId, responseData.token);
    } catch (err) {
      
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
     {loading && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(255, 255, 255, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 }}>
          <ClipLoader size={70} color={"#123abc"} loading={loading} />
        </div>
      )}
      <ErrorModal error={error} onClear={clearError} />
      <form onSubmit={handleSubmit}> 
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) =>setEmail(e.target.value)} 
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </FloatingLabel>
        <button className="btn btn-primary w-100 py-2 mt-4" type="submit">Sign in</button>
      </form>
    </div>
  );
}

export default BasicExample;