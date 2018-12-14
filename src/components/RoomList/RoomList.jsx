import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

// eslint-disable-line semi

export default function RoomList(props) {
  return (
    <div id="roomList">
      <div>
        <p>
          Here at the Funky Hotel, we have several different types of rooms to
          chooose from. Don't worry, they are all super FUNKY!!
        </p>
        <h1>Available Rooms</h1>
        {/* {props.roomList.map((room, index) => ( */}
        <div style={{ color: 'black' }} key>
          <h3 style={{ color: 'black' }}>Room Name: </h3>
          <h3 style={{ color: 'black' }}>Room Number: </h3>
          <h3 style={{ color: 'black' }}>Price: </h3>
          <hr />
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}
