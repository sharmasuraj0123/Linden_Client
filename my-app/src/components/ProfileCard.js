import React, { Component } from 'react';
import { Card,Button,Image, Icon } from 'semantic-ui-react';



class ProfileCard extends Component {
    render() {
        return (
            <Card width={100}>
    <Image src={require("../images/defaultPicture.jpg")} width={100}/>
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
     
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user'/>
        22 Friends
      </a>
    </Card.Content>
  </Card>
        )
    }
}

export default ProfileCard;

