import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ContentCard from '../components/SearchResultsCards/ContentCard';

class HighestRatedMovies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/movie/getHighestRatedMovies')
            .then(function (response) {
                response = response.data.movies;
                this.setState({
                    movies: response
                });
            }.bind(this));
    }

    render() {
        return (
            <Segment>
                <Header as='h1'>Highest Rated Movies</Header>
                <ContentCard contents={this.state.movies} />
            </Segment>
        );
    }
}

export default withRouter(HighestRatedMovies);
