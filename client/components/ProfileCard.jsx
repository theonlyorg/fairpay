/**
 * @module Profile
 * @author Katty Polyak
 * @date Wed, June 10, 2020
 * @desc Presentation component that renders a card with a label, piece of user data, and a clickable pencil icon to edit their information.
 * @example Name: Katty <Icon to update>
 */

import React, { Component } from 'react';

import { Card, TextField } from '@material-ui/core';

// editing birthdate component should be a "picker"

function ProfileCard(props) {
  return (
    <React.Fragment>
      <Card>
        <TextField variant="outlined" />
      </Card>
    </React.Fragment>
  );
}

export default ProfileCard;
