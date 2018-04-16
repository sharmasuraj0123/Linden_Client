import React, { Component } from 'react';
import { Rating, Card, Item, Label, Divider } from 'semantic-ui-react';
import Genres from './Genres';
import Cast from './Cast';

const ItemStyle = {
  padding: '10px'
};

class Movies extends Component {
  render() {
    return (
      this.props.movies.map((movie) =>
        <Card fluid key={movie.contentId}>
          <Item.Group>
            <Item style={ItemStyle}>
              <Item.Image src={movie.imageURL} />
              <Item.Content>
                <Item.Header as='a'>{movie.name}</Item.Header>
                <Item.Meta>
                  <span className='cinema'>{movie.year}</span>
                </Item.Meta>
                <Item.Description>{movie.details}</Item.Description>
                <Item.Extra>
                  <Rating defaultRating={movie.score} maxRating={5} disabled />
                  <Label>75 Reviews</Label>
                </Item.Extra>
                <Divider />
                <Genres genres={movie.genre} />
                <Divider />
                <Cast cast={movie.cast} />
              </Item.Content>
            </Item>
          </Item.Group>
        </Card>
      )
    );
  }
}

export default Movies;
