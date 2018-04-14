import React, { Component } from 'react';
import { Rating, Card, Item, Label } from 'semantic-ui-react';

class Movies extends Component {
  render() {
    return (
      this.props.movies.map((movie) =>
        <Card fluid>
          <Item.Group>
            <Item>
              <Item.Image src={movie.imageURL} />
              <Item.Content>
                <Item.Header as='a'>{movie.name}</Item.Header>
                <Item.Meta>
                  <span className='cinema'>{movie.releaseDate}</span>
                </Item.Meta>
                <Item.Description>{movie.details}</Item.Description>
                <Item.Extra>
                  <Rating defaultRating={movie.score * 5} maxRating={5} disabled />
                  <Label>75 Reviews</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Card>
      )
    );
  }
}

export default Movies;
