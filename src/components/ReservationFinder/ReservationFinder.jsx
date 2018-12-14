import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

export default function ReservationFinder(props) {
  return (
    <div className="reservation-container">
      {!props.dataReservation.msg ? (
        <div className="reservation-List">
          <div style={{ color: 'white' }} className="res-search">
            <h3>Find Reservation By ID Number</h3>
            <h4>Check In: </h4>
            <h4>Check Out: </h4>
            <h4>Room Name: </h4>
            <h4>Room Number: </h4>

            <input onChange />
            <Button onClick>Find Reservations</Button>
            <Button onClick>Delete Reservation</Button>
          </div>
        </div>
      ) : (
        <div className="reservation-List">
          <h1 style={{ color: 'white' }}> 'Reservation Not Found'</h1>
          <Button onClick>Go To Main Page</Button>
        </div>
      )}
    </div>
  );
}
