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
            <h4>Check In: {props.dataReservation.checkIn} </h4>
            <h4>Check Out: {props.dataReservation.checkOut} </h4>
            <h4>Room Name: {props.dataReservation.reserver} </h4>
            <h4>Room Number: {props.dataReservation.roomReserving}</h4>

            <input onChange={props.handleResNumber}/>
            <Button onClick={props.getDataReservation}>Find Reservations</Button>
            <Button onClick={() => props.deleteReservation(props.resId)}>Delete Reservation</Button>
          </div>
        </div>
      ) : (
        <div className="reservation-List">
          <h1 style={{ color: 'white' }}> 'Reservation Not Found'</h1>
          
        </div>
      )}
    </div>
  );
}
