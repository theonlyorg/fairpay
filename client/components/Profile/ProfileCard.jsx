/**
 * @module Profile
 * @author Katty Polyak
 * @date Wed, June 10, 2020
 * @desc Presentation component that renders a card with a label, piece of user data, and a clickable pencil icon to edit their information.
 * @example Name: Katty <Icon to update>
 */

import React, { useState, useContext } from 'react';

import { Box, TextField } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import { ProfileContext } from './Profile.jsx';

// editing birthdate component should be a "picker"

function ProfileCard(props) {
  // pass an object and deconstruct
  const profileContext = useContext(ProfileContext);

  return (
    <React.Fragment>
      <Box className="profile-card">
        <TextField
          variant="outlined"
          inputProps={{
            readOnly: Boolean(profileContext.readOnly),
            disabled: Boolean(profileContext.readOnly),
          }}
        />
        <Box>
          <CreateOutlinedIcon onClick={profileContext.toggleEdit} />
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default ProfileCard;
