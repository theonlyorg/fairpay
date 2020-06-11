/**
 * @module Profile
 * @author Katty Polyak
 * @date Wed, June 10, 2020
 * @desc Presentation component that renders a given user's profile information
 */

// import dependencies
import React, { Component } from 'react';

// import custom React Components
import ProfileCard from './ProfileCard.jsx';

// import Material UI React Components
import { Container } from '@material-ui/core';

class Profile extends Component {
  render() {
    return (
      <Container>
        <h1>Hello, world!</h1>
        <ProfileCard />
      </Container>
    );
  }
}

export default Profile;
