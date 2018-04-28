import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class ContentList extends Component {
  render() {
    return (
      <List divided relaxed>
        {this.props.movies.map((movie) =>
          <List.Item key={movie.id}>
            <List.Content floated='right'>
              <List.Header>{movie.rating}</List.Header>
            </List.Content>
            <List.Icon name='tree' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Header as='a'>{movie.name}</List.Header>
            </List.Content>
          </List.Item>
        )}
      </List>
    );
  }
}

export default ContentList;
