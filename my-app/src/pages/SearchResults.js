import React, { Component } from 'react'
import { Tab, Segment, Pagination, Grid, Menu, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import ContentCard from '../components/SearchResultsCards/ContentCard';
import ActorsCard from '../components/SearchResultsCards/ActorsCard';
import SideBarList from "../components/SideBarList";

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            tvShows: [],
            actors: [],
            page: 1,
            totalPages: 0,
            keywords: '',
            resultCount: {
                'all': 0,
                'movies': 0,
                'tvShows': 0,
                'actors': 0
            }
        };
    }

    createSearchRequest(keywords, page) {
        axios.get('http://localhost:8080/search?keywords=' + keywords + '&page=' + page)
            .then(function (response) {
                console.log(response);
                response = response.data;
                let movieList = response.movies;
                let tvShowList = response.tvShows;
                let actorsList = response.actors;
                let resultCountResponse = response.resultCount;
                let totalPages = Math.ceil(
                    Math.max(
                        Math.max(resultCountResponse.movies,
                            resultCountResponse.tvShows),
                        resultCountResponse.actors) / 10.0);
                movieList.forEach(function (element) {
                    element.year = element.releaseDate.split('-')[0];
                       
                });
                tvShowList.forEach(function (element) {
                    element.year = element.releaseDate.split('-')[0];
                   
                });
                actorsList.forEach(function (element) {
                    
                });
                this.setState({
                    movies: movieList,
                    tvShows: tvShowList,
                    actors: actorsList,
                    numberOfMovies: resultCountResponse.movies,
                    numberOfTvShows: resultCountResponse.tvShows,
                    numberOfActors: resultCountResponse.actors,
                    all: resultCountResponse.all,
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
                <Grid divided style={{ paddingTop: '2em' }}>
                    <Grid.Column width={11}>
                        <Segment raised>
                            <Tab panes={[
                                {
                                    menuItem: <Menu.Item >All<Label>{this.state.all}</Label></Menu.Item>,
                                    render: () =>
                                        <Tab.Pane>
                                            <ContentCard contents={this.state.movies} />
                                            <ContentCard contents={this.state.tvShows} />
                                            <ActorsCard actors={this.state.actors} />
                                        </Tab.Pane>
                                },
                                {
                                    menuItem: <Menu.Item >Movies<Label>{this.state.numberOfMovies}</Label></Menu.Item>,
                                    render: () =>
                                        <Tab.Pane>
                                            <ContentCard contents={this.state.movies} />
                                        </Tab.Pane>
                                },
                                {
                                    menuItem: <Menu.Item>TV Shows<Label>{this.state.numberOfTvShows}</Label></Menu.Item>,
                                    render: () =>
                                        <Tab.Pane>
                                            <ContentCard contents={this.state.tvShows} />
                                        </Tab.Pane>
                                },
                                {
                                    menuItem: <Menu.Item>Actors<Label>{this.state.numberOfActors}</Label></Menu.Item>,
                                    render: () =>
                                        <Tab.Pane>
                                            <ActorsCard actors={this.state.actors} />
                                        </Tab.Pane>
                                }]}
                            />
                            <Pagination
                                onPageChange={(e, data) => {
                                    this.props.history.push('/search?keywords=' + this.state.keywords + '&page=' + data.activePage);
                                    this.setState({
                                        page: data.activePage
                                    });
                                    this.createSearchRequest(this.state.keywords, data.activePage);
                                    this.forceUpdate();
                                }}
                                activePage={this.state.page}
                                totalPages={this.state.totalPages}
                            />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Segment raised >
                            <SideBarList title='Opening This week' />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(SearchResults);
