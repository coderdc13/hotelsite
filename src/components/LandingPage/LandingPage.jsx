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
    try {
       const api_call = await fetch(`http://54.85.179.245/api/rest/room`);
       const data = await api_call.json();
       this.setState({
         dataRoom: data,
         isLoading: false,
       })
    } catch (error){
      console.log('Error occurred in fetching room data.')
      console.log('Error:', error);
    }
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
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckboxChange = e => {
    // Handle change function that sets the opposite state of kitchen and bedroom
    this.setState({
      [e.target.name]: !this.state[e.target.name],
    });
  };

  getDataReservation = () => {
    // GET request to get the reservation by ID
    fetch(`http://54.85.179.245/api/rest/reservation/${this.state.resId}`)
    .then(response => response.json())
    .then(data => this.setState({
      dataReservation: data
    }))
    .catch(err => console.log('Error occurred in fetching reserving data.'));
  };

  handleResNumber = e => {
    // Handle change function to get the reservationID

    this.setState({
      resId: e.target.value,
    })
  };

  deleteReservation = async resId => {
    // DELETE request to delete a reservation by ID ... different stages of project ...
    try {
      const deletReservation = await fetch(
        `http://54.85.179.245/api/rest/reservation/${resId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        }

        ) 
        const response = await this.deleteReservation.json();

        this.setState({
          deleteReservationResponse: response.msg,
          dataReservation: [],
        });
    } catch(error) {
          console.log('Error occurred in deleting reservation data.')
          console.log('Error:', error); 
    }
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
          {this.state.view === 'carousel' && <Carousel deleteReservation={this.deleteReservation} />}
          {this.state.view === 'reservations' && (
            <ReservationFinder 
            getDataReservation={this.getDataReservation}
            dataReservation={this.state.dataReservation} 
            handleResNumber={this.handleResNumber}
            deleteReservation={this.deleteReservation}
            resId={this.state.resId}
            />
          )}
          {this.state.view === 'roomForm' && <RoomForm />}
          {this.state.view === 'roomList' && <RoomList roomList={this.state.dataRoom}/>}
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
