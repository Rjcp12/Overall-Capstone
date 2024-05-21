import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(props) {

  return (
    <>
      <Modal onHide={props.onClear} show={!!props.error}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.error}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={props.onClear}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;