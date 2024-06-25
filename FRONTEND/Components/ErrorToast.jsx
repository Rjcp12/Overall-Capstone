import React from 'react';
import Toast from 'react-bootstrap/Toast';
import 'bootstrap/dist/css/bootstrap.min.css';

function ErrorToast(props) {
  return (
    <div className="toast-container position-fixed end-0 p-3" style={{ zIndex: 1050, bottom: '50px' }}>
      <Toast
        bg="danger"
        onClose={props.onClear}
        show={!!props.error}
        delay={3000}
        autohide
      >
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Warning</strong>
        </Toast.Header>
        <Toast.Body className="text-white">
          {props.error}
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default ErrorToast;
