import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class TvShows extends Component {
  render() {
    return (
      this.props.tvShows.map((tvShow) =>
        <Card>
          <Image height='250' width='300' src={tvShow.imageUrl} />
          <Card.Content>
            <Card.Header>
              {tvShow.title}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                Joined in 2015
              </span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
      </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='star' />
              {tvShow.rating}
            </a>
          </Card.Content>
        </Card>)
    );
  }
}

export default TvShows;