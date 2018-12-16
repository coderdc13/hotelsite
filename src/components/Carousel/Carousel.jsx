import React from 'react';
import ReservationForm from '../ReservationForm/ReservationForm.jsx';
import './style.css';
import 'react-bootstrap';
import oldPeople from '../../images/elderlyPeople.jpg';
import holiday from '../../images/hotelChristmas.jpg';
import breakfast from '../../images/hotelBreakfast.jpg';

const BackArrow = props => (
  <div
    className="left-arrow"
    onClick={props.previousImage}
    style={{ fontSize: '2em', marginRight: '12px' }}
  >
    <i className="fa fa-angle-left fa-2x" aria-hidden="true" />
  </div>
);

const NextArrow = props => (
  <div
    className="right-arrow"
    onClick={props.nextImage}
    style={{ fontSize: '2em', marginLeft: '12px' }}
  >
    <i className="fa fa-angle-right fa-2x" aria-hidden="true" />
  </div>
);
class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //array of objects, one field text, one image
      currentImageIndex: 0,
      photos: [
        { title: 'Ask About Senior Citizen Discounts', picture: oldPeople },
        { title: 'Holiday Specials Available', picture: holiday },
        { title: 'Enjoy Breakfast, Our Treat!', picture: breakfast }
      ],
      slideCount: 0,
      postResvResponse: '',
      resInformation: null
    };
  }

  nextImage = () => {
    this.setState({ slideCount: this.state.slideCount + 1 });
  };

  previousImage = () => {
    this.setState({ slideCount: this.state.slideCount - 1 });
  };

  addReservation = e => {
    // POST method to add a reservation
    const reservationBody = {
      reserver: this.state.reserver,
      roomReserving: this.state.roomReserving,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut,
    }
    e.preventDefault();
    fetch(`http://54.85.179.245/api/rest/reservation`, {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(reservationBody),
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        postResvResponse: data.msg,
        resInformation: data
      })
    })
    .catch(err => {
      console.log('Error', err)
    })
  };
finishConfirm = () => {
  this.setState({
    postResvResponse: '',
  });
};

handleFormChange = e => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};

handleCheckboxChange = e => {
  this.setState({
    [e.target.name]: !this.state[e.target.name]
  });
};

  render() {
    return (
      <div id="carousel">
        {this.state.photos.map(photo => {
          if (this.state.photos.indexOf(photo) === this.state.slideCount) {
            return (
              <div key={photo.title} id="photo-container">
                <div className="carousel-text">
                  <h1>{photo.title} </h1>
                </div>
                <img src={photo.picture} alt="" />
              </div>
            );
          }
          return '';
        })}
        {this.state.slideCount !== 0 ? (
          <BackArrow previousImage={this.previousImage} />
        ) : (
          ''
        )}
        <div id="carousel-return-container">
          <ReservationForm
            onChange={this.handleFormChange}
            dateChange={this.handleFormChange}
            addReservation={this.addReservation}
            resConfirm={this.state.postResvResponse}
            resInformation={this.state.resInformation}
            finishConfirm={this.finishConfirm}
            deleteReservation={this.props.deleteReservation}
          />
        </div>
        {this.state.slideCount !== this.state.photos.length - 1 ? (
          <NextArrow nextImage={this.nextImage} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default Carousel;
