import React, { Component } from 'react'
import { Segment, Pagination } from 'semantic-ui-react'
import axios from 'axios';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Movies from '../components/Movies';
import StepExampleLinkClickable from "../components/StepExampleLinkClickable";

const SegmentStyle = {
    flex: 1,
    marginLeft: "3em",
    marginRight: "3em",
};

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        let keywords = values.query.replace(/ /g, '+');
        axios.get('http://localhost:8080/search?keywords=' + keywords + '&page=1')
            .then(function (response) {
                console.log(response);
                let movieList = response.data.movies;
                let listLength = 0;
                movieList.forEach(function (element) {

                    element.imageURL = require("../images/Logo.png");
                    listLength++;
                });
                this.setState({
                    movies: movieList,
                    numberOfmovies: listLength
                });
            }.bind(this));
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        return (

            <Segment raised style={SegmentStyle}>
                < NavBar />
                <Segment>
                    <StepExampleLinkClickable numberOfmovies={this.state.numberOfmovies} />
                    <Movies className='Movies' movies={this.state.movies} />
                    <Pagination defaultActivePage={5} totalPages={10} horizontalAlign='middle' />
                </Segment>
                <Footer />
            </Segment>

        );
    }
}

export default withRouter(SearchResults);
