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
            totalPages: 0,
            keywords: '',
            resultCount:{
                'all' : 0,
                'movies':0,
                'tvShows':0,
                'actors':0
            }
        };
    }

    createSearchRequest(keywords, page) {
        axios.get('http://localhost:8080/search?keywords=' + keywords + '&page=' + page)
        .then(function (response) {
            console.log(response);
            let movieList = response.data.movies;
            let resultCountResponse = response.data.resultCount;
            let listLength = 0;
            let totalPages = Math.ceil(response.data.resultCount.all / 10.0);
            
            movieList.forEach(function (element) {
                element.year = element.releaseDate.split('-')[0];
                element.imageURL = require("../images/Logo.png");
                listLength++;
            });
            this.setState({
                movies: movieList,
                numberOfmovies: listLength,
                resultCount: resultCountResponse,
                totalPages: totalPages,
                keywords: keywords,
                page: page
            });

        }.bind(this));
    }

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        let keywords = values.keywords.replace(/ /g, '+');
        let page = values.page;
        this.createSearchRequest(keywords, page);
    }

    render() {
        return (
            <div>
                <NavBar />
                <Segment padded >
                    <StepExampleLinkClickable resultCount={this.state.resultCount} />
                    <Movies className='Movies' movies={this.state.movies} />
                    <Pagination 
                        onPageChange ={(e, data) => {
                            this.props.history.push('/search?keywords='+this.state.keywords+'&page='+data.activePage);
                            this.state.page = data.activePage;
                            this.createSearchRequest(this.state.keywords, data.activePage);
                            this.forceUpdate();
                        }}
                        defaultActivePage={this.state.page} 
                        totalPages={this.state.totalPages} 
                        horizontalAlign='middle' 
                    />
                </Segment>
                <Footer />
            </div>
        );
    }
}

export default withRouter(SearchResults);
