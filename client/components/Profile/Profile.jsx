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

const Profile = props => {
  // render a React Fragment with profile cards in it
  const profileCards = [];
  for (let i = 0; i < 5; i++) {
    profileCards.push(<ProfileCard key={'card' + i} />);
  }
  return (
    <Container id="profile-container" maxWidth="sm">
      <h1>Hello, world!</h1>
      <div id="profile-card-display">{profileCards}</div>
    </Container>
  );
};

export default Profile;
