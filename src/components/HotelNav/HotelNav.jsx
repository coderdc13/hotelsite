import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

const BakeryNav = props => {
  return (
    <Navbar
      fixedTop
      collapseOnSelect={true}
      onSelect={props.selectProp}
      id="bakeryNav"
    >
      <Navbar.Header>
        <Navbar.Brand>
          <a className={'logo'} href="http://localhost:3000">
            <span>
              <p>Home</p>
            </span>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem className="links" eventKey={'reservations'}>
            Reservation Finder
          </NavItem>
          <NavItem className="links" eventKey={'roomForm'}>
            Room Form
          </NavItem>
          <NavItem className="links" eventKey={'roomList'}>
            Room List
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BakeryNav;
