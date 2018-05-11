import React, { Component } from 'react';
import {  List } from 'semantic-ui-react';

class MovieList extends Component {
    render() {
        console.log(this.props);
        return (
            this.props.movies.map((movie) =>
            <List.Item>
            <List horizontal>
                <List.Item>
                    <List.Icon name='bookmark'  size='large' verticalAlign='left' />
                </List.Item>
                <List.Item>
                    <List.Header as='a' href={'/movie/' + movie.contentId} 
                    size='huge'>{movie.name}</List.Header>
                </List.Item>
            </List>
            </List.Item>
            )
        );
    }
}

export default MovieList;
