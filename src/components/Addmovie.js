

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Addmovie({handleadd}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [form,setForm]=useState({
    name:'',
    image:"",
    desc:"",
    rating:0 ,
    date:"",
})
const handlechange = (e) => {
  setForm(
    {...form,[e.target.name]:e.target.value}
  )
}
const handleSabmit = (e) => {
    e.preventDefault()
    handleadd(form)
    setForm({
    name:'',
    image:"",
    desc:"",
    rating:0 ,
    date:"",
   
    });
    handleClose();
};

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{background:'violet',margin:'20px'}}>
        ADD NEW MOVIE
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSabmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>title</Form.Label>
              <Form.Control
                type="text" name="name"
                placeholder="title"
                autoFocus
                onChange={handlechange}
                value={form.name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>PosterURL</Form.Label>
              <Form.Control
                type="url" name="image"
                placeholder="Poster URL"
                autoFocus
                onChange={handlechange}
                value={form.image}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number" name="rating"
                placeholder="rate"
                autoFocus
                onChange={handlechange}
                value={form.rating}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="text" name="desc"
                placeholder="description"
                autoFocus
                onChange={handlechange}
                value={form.desc}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>date</Form.Label>
              <Form.Control
                type="date"name="date"
                placeholder="title"
                autoFocus 
                onChange={handlechange}
                value={form.date}
              />
            </Form.Group>
            <Modal.Footer>
          
          <button>
            Save Changes
          </button>
        </Modal.Footer>
            </Form>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
        </Modal.Body>
       
      </Modal>
      
    </>
  );
}



export default Addmovie
