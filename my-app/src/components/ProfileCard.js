import React, { Component } from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

class ProfileCard extends Component {
  render() {
    return (
      <Card style={{ width: 200, height: 250, verticalAlign: 'top' }}>
        <Image src={require("../images/defaultPicture.jpg")} style={{ width: 200, height: 200, verticalAlign: 'top' }} />
        <Card.Content>
          <Card.Header>
            Matthew
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
            </a>
        </Card.Content>
      </Card>
    )
  }
}

export default ProfileCard;

