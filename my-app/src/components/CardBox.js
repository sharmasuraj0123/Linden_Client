import React, { Component } from 'react';
import { Segment, Rating, Grid, Card, Icon, Image } from 'semantic-ui-react';

class CardBox extends Component {
  render() {
    return (
      <Segment attached>
        <Grid>
          <Grid.Row columns={7}>
            {this.props.movies.map((movie) =>
              <Grid.Column key={movie.id}>
                <Card href={'/movies/'+movie.id}>
                  <Image height='250' width='280' src={movie.imageURL} />
                  <Card.Content>
                    <Card.Header>
                      {movie.name}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name='comment' />75 Reviews
                </Card.Content>
                  <Card.Content extra>
                    <Rating disabled={true} icon='star' defaultRating={movie.rating} maxRating={movie.rating} />
                  </Card.Content>
                </Card>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default CardBox;
