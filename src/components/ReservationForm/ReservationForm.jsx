import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

export default function ReservationForm(props) {
  return (
    <div className="reservation-form-container">
      {props.resConfirm === 'Success' ? (
        <div className="confirm-div">
          <h3>Thank you! Reservation information Below</h3>
          <h4>Reserver: </h4>
          <h4>Check In: </h4>
          <h4>Check Out: </h4>
          <h4>Room Name:</h4>
          <h4>Room Number:</h4>
          <h4>Total: $</h4>
          <h4>Confirmation Number: </h4>
          <Button onClick>Finish Confirmation</Button>
          <Button onClick>Delete Reservation</Button>
        </div>
      ) : (
        <div>
          <h3 style={{ color: 'white' }}>Make a Reservation!</h3>
          <form style={{ display: 'flex' }} onSubmit={''}>
            <div>
              <label htmlFor="reserver">Reservation</label>
              <input
                id="reserver"
                type="text"
                name="reserver"
                placeholder="reserver"
                onChange={''}
              />
            </div>
            <div>
              <label htmlFor="roomReserving">Room</label>
              <input
                id="roomReserving"
                type="text"
                name="roomReserving"
                placeholder="room to reserve"
                onChange={''}
              />
            </div>
            <div>
              <label htmlFor="checkIn">Check In</label>
              <input id="checkIn" type="date" name="checkIn" onChange={''} />
            </div>
            <div>
              <label htmlFor="checkOut">Check Out</label>
              <input id="checkOut" type="date" name="checkOut" onChange={''} />
            </div>
            <div>
              <Button style={{ marginTop: '15%' }} type="submit">
                Add Reservation
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
