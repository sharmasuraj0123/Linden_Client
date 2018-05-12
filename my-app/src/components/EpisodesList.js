import React, { Component } from 'react';
import { Card, Item } from 'semantic-ui-react';

const ItemStyle = {
  padding: '10px'
};

class EpisodesList extends Component {
  render() {
    return (
      this.props.episodes.map((episode) =>
        <Card fluid key={episode.contentId}>
          <Item.Group>
            <Item style={ItemStyle}>
              <Item.Content>
                <Item.Header href={'/movie/' + episode.contentId}>
                  {episode.name}
                </Item.Header>
                <Item.Meta>
                  <span className='cinema'>{episode.releaseDate}</span>
                </Item.Meta>
                <Item.Description>{episode.details}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card>
      )
    );
  }
}

export default EpisodesList;
