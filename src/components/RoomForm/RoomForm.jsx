import React from 'react';
import './style.css';
import { Button } from 'react-bootstrap';

export default function RoomForm(props) {
  // const room = props.roomList[props.roomList.length - 1];
  return (
    <div className="room-form-container">
      {props.postResponse === 'Success' ? (
        <div className="room-form">
          <div className="room-add">
            <h3>Room Name: </h3>
            <h3>Price: </h3>
            <h3>Room Number:</h3>
            <h3>Beds: </h3>
            <Button onClick>Confirm</Button>
          </div>
        </div>
      ) : (
        <div className="room-form">
          <div className="room-add">
            <h2 style={{ color: 'white' }}>Create a new Room</h2>
            <form onSubmit style={{ display: 'flex' }}>
              <div>
                <label className="room-form-label" htmlFor="price">
                  Price
                </label>
                <input id="price" type="text" name="price" onChange required />
              </div>

              <div>
                <label className="room-form-label" htmlFor="name">
                  Name
                </label>
                <input id="name" type="text" name="name" onChange required />
              </div>

              <div>
                <label className="room-form-label" htmlFor="number">
                  Number
                </label>
                <input
                  id="number"
                  type="text"
                  name="number"
                  onChange
                  required
                />
              </div>

              <div>
                <label className="room-form-label" htmlFor="beds">
                  Beds
                </label>
                <input id="beds" type="text" name="beds" onChange required />
              </div>

              <div>
                <label className="room-form-label" htmlFor="">
                  Bathtub
                </label>
                <input
                  id="bathtub"
                  type="checkbox"
                  name="bathtub"
                  onChange
                  required
                />
              </div>

              <div>
                <label className="room-form-label" htmlFor="">
                  Kitchen
                </label>
                <input
                  id="kitchen"
                  type="checkbox"
                  name="kitchen"
                  onChange
                  required
                />
              </div>

              <div>
                <Button type="submit">Add Room</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
