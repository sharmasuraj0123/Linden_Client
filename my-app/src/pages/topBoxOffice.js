import React, { Component } from 'react'
import { Header, Segment } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ContentCard from '../components/SearchResultsCards/ContentCard';

class topBoxOffice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/movie/getTopBoxOffice')
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
                <Header as='h1'>Top Box Office</Header>
                <ContentCard contents={this.state.movies} />
            </Segment>
        );
    }
}

export default withRouter(topBoxOffice);
