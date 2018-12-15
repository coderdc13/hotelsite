import React from 'react';

import Pool from '../../images/poolBusiness.jpg';
import Soldier from '../../images/soldier.jpg';
import Dog from '../../images/dog.jpg';

import HotelNav from '../HotelNav/HotelNav';
import RoomList from '../RoomList/RoomList';
import Carousel from '../Carousel/Carousel';
import Card from '../Card/Card';
import ReservationFinder from '../ReservationFinder/ReservationFinder';
import RoomForm from '../RoomForm/RoomForm';
import './style.css';

const cardData = {
  properties: [
    {
      index: 0,
      header: 'Military Discount',
      picture: Soldier
    },
    {
      index: 1,
      header: 'Pool Available!!!',
      picture: Pool
    },
    {
      index: 2,
      header: 'Pets Welcome at No Charge',
      picture: Dog
    }
  ]
};
class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'carousel',
      properties: cardData.properties,
      dataRoom: [],
      dataReservation: [],
      resId: ''
    };
  }

  componentDidMount = () => {
    // Write a function that gets all of the rooms
    this.getDataRoom();
  };

  handleSelect = key => {
    this.setState({
      view: key
    });
  };

  getDataRoom = async () => {
    // GET request to get all of the rooms
  };

  addRoom = async e => {
    // POST request to add a room
  };

  finishConfirm = () => {
    // Reset the view
  };

  handleFormChange = e => {
    // Handle change function that gets form input values
    // *BONUS* Use array destructuring
  };

  handleCheckboxChange = e => {
    // Handle change function that sets the opposite state of kitchen and bedroom
  };

  getDataReservation = () => {
    // GET request to get the reservation by ID
  };

  handleResNumber = e => {
    // Handle change function to get the reservationID
  };

  deleteReservation = async resId => {
    // DELETE request to delete a reservation by ID
  };

  goHome = () => {
    // setState of view back to 'carousel'
  };

  render() {
    const { properties } = this.state;
    return (
      <div className="App">
        <HotelNav selectProp={this.handleSelect} view={this.state.view} />
        <div className="mainContainer">
          {this.state.view === 'carousel' && <Carousel />}
          {this.state.view === 'reservations' && (
            <ReservationFinder dataReservation={this.state.dataReservation} />
          )}
          {this.state.view === 'roomForm' && <RoomForm />}
          {this.state.view === 'roomList' && <RoomList />}
        </div>
        <div className="cardHolder">
          {properties.map(property => (
            <Card key={property.index} property={property} />
          ))}
        </div>
      </div>
    );
  }
}

export default LandingPage;
