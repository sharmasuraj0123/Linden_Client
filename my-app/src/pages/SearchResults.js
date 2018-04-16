import React, { Component } from 'react'
import { Segment, Pagination } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Movies from '../components/Movies';
import StepExampleLinkClickable from "../components/StepExampleLinkClickable";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            page: 1,
            resultCount:{
                'all' : 0,
                'movies':0,
                'tvShows':0,
                'actors':0
            }
                        
            
        };
    }

    handleClick(query) { 
        this.props.history.push('/search?keywords='+this.query+'&page=1');
        window.location.reload();

    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        let keywords = values.keywords.replace(/ /g, '+');
        let page = values.page;
        axios.get('http://localhost:8080/search?keywords=' + keywords + '&page=' + page)
            .then(function (response) {
                console.log(response);
                let movieList = response.data.movies;
                let resultCountResponse = response.data.resultCount;
               // console.log(response.data);
                let listLength = 0;
                movieList.forEach(function (element) {
                    element.year = element.releaseDate.split('-')[0];
                    element.imageURL = require("../images/Logo.png");
                    listLength++;
                });
                this.setState({
                    movies: movieList,
                    numberOfmovies: listLength,
                    resultCount: resultCountResponse
                });
            }.bind(this));
    }

    render() {
        return (
            <div>
                <NavBar />
                <Segment padded >
                    <StepExampleLinkClickable resultCount={this.state.resultCount} />
                    <Movies className='Movies' movies={this.state.movies} />
                    <Pagination defaultActivePage={this.state.page} totalPages={10} horizontalAlign='middle' />
                </Segment>
                <Footer />
            </div>
        );
    }
}

export default withRouter(SearchResults);
