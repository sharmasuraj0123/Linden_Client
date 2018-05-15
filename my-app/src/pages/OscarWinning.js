import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ContentCard from '../components/SearchResultsCards/ContentCard';

class OscarWinning extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/movie/getAcademyAwardWinners?page=1')
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
                <Header as='h1'>Oscar Winning</Header>
                <ContentCard contents={this.state.movies} />
            </Segment>
        );
    }
}

export default withRouter(OscarWinning);
