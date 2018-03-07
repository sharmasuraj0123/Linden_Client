import React, { Component } from 'react';
import { Rating, Grid, Card, Icon, Image } from 'semantic-ui-react';

class Movies extends Component {
  render() {
    return (
      this.props.movies.map((movie) =>
        <Grid.Column>
          <Card>
            <Image height='250' width='300' src={movie.imageUrl} />
            <Card.Content>
              <Card.Header>
                {movie.name}
              </Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Icon name='comment'/>75 Reviews
            </Card.Content>
            <Card.Content extra>
              <Rating disabled={true} icon='star' defaultRating = {movie.rating} maxRating={movie.rating} />
            </Card.Content>
          </Card>
        </Grid.Column>
      )
    );
  }
}

export default Movies;
