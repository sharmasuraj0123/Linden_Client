import React, { Component } from 'react';
import { Divider, Item } from 'semantic-ui-react';

const ItemStyle = {
  padding: '10px'
};

class EpisodesList extends Component {
  render() {
    return (
      this.props.episodes.map((episode) =>
        
          <Item.Group>
            <Item style={ItemStyle}>
              <Item.Content>
                <Item.Header style={{ color: '#ffffff' }}>
                  {episode.name}
                </Item.Header>
                <Item.Meta  style={{ color: '#ffffff' }}>
                  <span className='cinema'>{episode.releaseDate}</span>
                </Item.Meta>
                <Item.Description  style={{ color: '#ffffff' }}>{episode.details}</Item.Description>
              </Item.Content>
            </Item>
            <Divider/>
          </Item.Group>
          
       
      )
    );
  }
}

export default EpisodesList;
