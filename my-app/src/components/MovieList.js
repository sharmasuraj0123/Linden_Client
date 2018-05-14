import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

class MovieList extends Component {
    render() {
        return (
            this.props.movies.map((movie) =>
                <List.Item key={movie.name}>
                    <List horizontal>
                        <List.Item>
                            <List.Icon name='bookmark' size='large' verticalAlign='middle' />
                        </List.Item>
                        <List.Item>
                            <Link to={'/' + movie.contentType + '/' + movie.id}>
                                <List.Header size='huge'> {movie.name}</List.Header>
                            </Link>
                        </List.Item>
                    </List>
                </List.Item>
            )
        );
    }
}

export default withRouter(MovieList);
