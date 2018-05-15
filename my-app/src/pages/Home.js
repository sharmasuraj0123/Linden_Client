import React, { Component } from 'react'
// eslint-disable-next-line
import { Divider, Grid, Header, Image, List, Segment, Feed, Embed, Card } from 'semantic-ui-react'
import FeaturedCard from "../components/FeaturedCard";
import DescriptionCard from "../components/DescriptionCard";
import SideBarList from "../components/SideBarList";
import axios from 'axios';
import FeaturedMovieCarousal from "../components/FeaturedMovieCarousal";
import { withRouter, Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            highestRated: [],
            topPicks: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080/movie/getLindenTopPicks')
            .then(function (response) {
                let st = this.state;
                console.log(response.data.topPicks);
                st.topPicks = response.data.topPicks;
                this.setState(st);
            }.bind(this));

        axios.get('http://localhost:8080/movie/getHighestRatedMovies')
            .then(function (response) {
                let st = this.state;
                let arr = response.data.movies;
                st.highestRated = arr.slice(Math.max(arr.length - 3, 1));
                this.setState(st);
            }.bind(this));
    }

    render() {
        return (
            <div>
                <Grid divided style={{ paddingTop: '' }}>
                    <Grid.Column width={12}>
                        <List>
                            <List.Item>
                                <FeaturedMovieCarousal />
                            </List.Item>
                        </List>
                        <Divider horizontal inverted style={{ fontSize: '30px' }}> Summer Collections</Divider>
                        <List horizontal>
                            <List.Item>
                                <DescriptionCard imagesrc={require('../images/Fall.png')} verticalAlign='top' />
                            </List.Item>
                            {this.state.topPicks.map((movie) =>
                                <List.Item >
                                    <Link to={'movie/' + movie.id}>
                                        <Card centered style={{ width: 195, height: 400, verticalAlign: 'top' }}
                                            image={movie.poster}
                                            header={movie.name}
                                        />
                                    </Link>
                                </List.Item>
                            )}
                        </List>
                        <Divider inverted />
                        <List horizontal>
                            <List.Item style={{}}>
                                <DescriptionCard imagesrc={require('../images/Winter.png')} verticalAlign='top' />
                            </List.Item>
                            {this.state.highestRated.map((movie) =>
                                <List.Item >
                                    <Link to={'movie/' + movie.id}>
                                        <Card centered style={{ width: 195, height:400, verticalAlign: 'top' }}
                                            image={movie.poster}
                                            header={movie.name}
                                        />
                                    </Link>
                                </List.Item>
                            )}
                        </List>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment raised>
                            <SideBarList />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Home);
