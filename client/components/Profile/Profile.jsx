/**
 * @module Profile
 * @author Katty Polyak
 * @date Wed, June 10, 2020
 * @desc Presentation component that renders a given user's profile information
 */

// import dependencies
import React, { useState, useContext, Component } from 'react';

// import custom React Components
import ProfileCard from './ProfileCard.jsx';

// import Material UI React Components
import { Container } from '@material-ui/core';

export const ProfileContext = React.createContext({});

const Profile = props => {
  getUserData();

  const profileItems = {
    name: { label: 'Name: ', value: 'Katty Polyak', readOnly: true },
    email: {
      label: 'Email: ',
      value: 'Katty.Polyak@gmail.com',
      readOnly: false,
    },
    race: { label: 'Race: ', value: 'White', readOnly: true },
    gender: { label: 'Gender: ', value: 'Female', readOnly: true },
    lgbtq: { label: 'LGBTQ+?: ', value: 'no', readOnly: true },
    age: { label: 'Age: ', value: '30', readOnly: true },
  };
  const profileKeys = Object.keys(profileItems);
  // pass in the id of the item that was clicked so that the appropriate box can be to set readOnly true/false
  const toggleEdit = () => {
    console.log(readOnly.name);

    setReadOnly({
      ...readOnly,
      name: !readOnly.name,
    });
  };

  function getUserData() {
    fetch('/api/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => {
        const { rawProfileItems } = data;
        console.log(data);
      })
      .catch(err => console.log(err));
  }

  // render a React Fragment with profile cards in it

  const profileCards = [];
  for (let i = 0; i < profileKeys.length; i++) {
    const id = profileKeys[i];
    profileCards.push(
      <ProfileCard
        key={id}
        id={id}
        label={profileItems[id].label}
        value={profileItems[id].value}
        readOnly={profileItems[id].readOnly}
      />
    );
  }
  return (
    <Container id="profile-container" maxWidth="xl">
      <div id="profile-header-text">
        <h1>User Profile</h1>
      </div>
      <div id="profile-card-display">{profileCards}</div>
    </Container>
  );
};

export default Profile;
