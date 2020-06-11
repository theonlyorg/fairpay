/**
 * @module Profile
 * @author Katty Polyak
 * @date Wed, June 10, 2020
 * @desc Presentation component that renders a given user's profile information
 */

// import dependencies
import React, { useState, useContext } from 'react';

// import custom React Components
import ProfileCard from './ProfileCard.jsx';

// import Material UI React Components
import { Container } from '@material-ui/core';

export const ProfileContext = React.createContext({});

const Profile = props => {
  const defaultState = {
    name: true,
  };

  const [readOnly, setReadOnly] = useState(defaultState);

  // const profileItems = {
  //   name: { label: 'Name: ', value: 'Katty Polyak', readOnly: true },
  //   email: {},
  // };
  // pass in the id of the item that was clicked so that the appropriate box can be to set readOnly true/false
  // const toggleEdit = () => {
  //   console.log(readOnly.name);

  //   setReadOnly({
  //     ...readOnly,
  //     name: !readOnly.name,
  //   });
  // };

  const profileItems = {
    name: { label: 'Name: ', value: 'Katty Polyak', readOnly: true },
    email: {
      label: 'Email: ',
      value: 'Katty.Polyak@gmail.com',
      readOnly: false,
    },
    race: { label: 'Race: ', value: 'White', readOnly: false },
    gender: { label: 'Gender: ', value: 'White', readOnly: false },
    lgbtq: { label: 'Identify as LGBTQ+?: ', value: 'no', readOnly: false },
    age: { label: 'Age: ', value: '30', readOnly: false },
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

  // render a React Fragment with profile cards in it

  const profileCards = [];
  for (let i = 0; i < profileKeys.length; i++) {
    profileCards.push(<ProfileCard key={profileKeys[i]} />);
  }
  return (
    <Container id="profile-container" maxWidth="xl">
      <div id="profile-header-text">
        <h1>User Profile</h1>
      </div>
      <div id="profile-card-display">
        <ProfileContext.Provider
          value={{ ...readOnly, toggleEdit: toggleEdit }}
        >
          {profileCards}
        </ProfileContext.Provider>
      </div>
    </Container>
  );
};

export default Profile;
