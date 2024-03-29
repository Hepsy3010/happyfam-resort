import React, { useState } from 'react';
import { Modal, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Room({ room ,fromdate,todate}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <div>
      <div className='row bs'>
        <div className="col-md-5">
          {room.imageurls && room.imageurls.length > 0 && (
            <img src={room.imageurls[0]} className='smallimg' alt="Room" />
          )}
        </div>
        <div className="col-md-7 custom-right">
          <h1>{room.name}</h1>
          <b>
            <p>Max Count: {room.maxcount}</p>
            <p>Phone Number: {room.phonenumber}</p>
            <p>Type: {room.type}</p>
          </b>
          <div className="float-right">
            <Link to={`/book/${room._id}/${fromdate}/${todate}`}>
              <button className="btn btn-primary mr-2">Book Now</button>
            </Link>
            <button className='btn btn-primary' onClick={handleShow}>View Details</button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{room.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {room.imageurls && room.imageurls.map((url, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100 bigimg"
                  src={url}
                  alt={`Slide ${index}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <p>{room.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;
