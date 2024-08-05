import { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function NotesModal({notesLoader, show, newNotes, cancelNotesModalHandler, submitNotesModalHandler, notesChangeHandler}) {

  const textRef = useRef();

  useEffect(() => {
    if (show) {
      textRef.current.focus();
    }
  }, [])


  return (
    <>
      

      <Modal show={show} onHide={cancelNotesModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Notes Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group> */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>New Note</Form.Label>
              <Form.Control as="textarea" ref={textRef} rows={3} onChange={notesChangeHandler} value={newNotes} onKeyDown={(e) => {
                
                if (e.code === "Enter" || e.code === "NumpadEnter") {
                  submitNotesModalHandler();
                }
              } }/>
            </Form.Group>
          </Form>
          <p>Press Enter to Submit | Press Esc to Cancel</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelNotesModalHandler}>
            Cancel
          </Button>
          <Button variant="primary" onClick={submitNotesModalHandler}>
            {notesLoader ? 'Saving...!!' : 'Submit'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NotesModal;