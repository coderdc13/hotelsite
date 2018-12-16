import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

export default function ReservationForm(props) {
  return (
    <div className="reservation-form-container">
      {props.resConfirm === 'Success' ? (
        <div className="confirm-div">
          <h3>Thank you! Reservation information Below</h3>
          <h4>Reserver: {props.resInformation.reservation.reserver}</h4>
          <h4>Check In: {props.resInformation.reservation.checkIn}</h4>
          <h4>Check Out: {props.resInformation.reservation.checkOut}</h4>
          <h4>Room Name: {props.resInformation.reservation.roomReserving.name}</h4>
          <h4>Room Number: {props.resInformation.reservation.roomReserving.number}</h4>
          <h4>Total: ${props.resInformation.reservation.roomReserving.price}</h4>
          <h4>Confirmation Number: {props.resInformation.reservation._id} </h4>
          <Button onClick={props.finishConfirm}>Finish Confirmation</Button>
          <Button onClick={() => props.deleteReservation(props.resInformation.reservation._id)}>Delete Reservation</Button>
        </div>
      ) : (
        <div>
          <h3 style={{ color: 'white' }}>Make a Reservation!</h3>
          <form style={{ display: 'flex' }} onSubmit={props.addReservation}>
            <div>
              <label htmlFor="reserver">Reservation</label>
              <input
                id="reserver"
                type="text"
                name="reserver"
                placeholder="reserver"
                onChange={props.onChange}
                style={{ color: 'black'}}
              />
            </div>
            <div>
              <label htmlFor="roomReserving">Room</label>
              <input
                id="roomReserving"
                type="text"
                name="roomReserving"
                placeholder="room to reserve"
                onChange={props.onChange}
              />
            </div>
            <div>
              <label htmlFor="checkIn">Check In</label>
              <input id="checkIn" type="date" name="checkIn" onChange={props.dateChange} />
            </div>
            <div>
              <label htmlFor="checkOut">Check Out</label>
              <input id="checkOut" type="date" name="checkOut" onChange={props.dateChange} />
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
