import React, { Component } from 'react'
import { Circle } from 'rc-progress';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// eslint-diasble-next-line
import { Divider, Icon, Tab, Table, Grid, Button, Form, Header, Image, List, Menu, Rating, Segment, Embed } from 'semantic-ui-react'
import SideBarList from "../components/SideBarList";
import ReviewCard from "../components/ReviewCard";
import CastCard from "../components/CastCard";
import SeasonsList from "../components/SeasonsList";
import EpisodesList from "../components/EpisodesList";
import Genre from "../components/Genres";

import Cookies from 'universal-cookie';

const commentPanes = [
    { menuItem: 'All Critics', render: () => <Tab.Pane attached={false}><ReviewCard /></Tab.Pane> },
    { menuItem: 'Top Critics', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Audience', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Fall', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Winter', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]



let details = ' '


class SeasonDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: [],
            cast: [], 
            episodes :[]
        }
    }



    componentDidMount() {
        let tvShowId = this.props.match.params.tvShowId;
        let seasonNumber = this.props.match.params.seasonNumber;
        axios.get('http://localhost:8080/tvShow/' + tvShowId + '/season/' +seasonNumber )
            .then(function (response) {
                let season = response.data.season;
                console.log(season);
                this.setState({
                    seasonNumber: season.seasonNumber,
                    overview: season.details,
                    cast: season.cast,
                    numberOfEpisodes: season.numberOfEpisodes,
                    poster: 'https://image.tmdb.org/t/p/w500' + season.poster,
                    releaseDate: season.releaseDate,
                    episodes: season.episodes
                    
                });
                console.log(this.state.cast);
            }.bind(this));
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={12}>
                        <Segment inverted>
                            <List vertical='true'>
                                <List.Item >
                                    <List.Item >
                                    <Header as='h6' inverted style={{ fontSize: '2.5em', color: '#ffffff', }}>
                                                    {this.state.name}
                                                </Header>
                                    </List.Item >            
                                    <List.Item>
                                        <Grid>
                                            <Grid.Column width={5}>
                                                <Image bordered
                                                    src= {this.state.poster}
                                                    style={{ width: 280, verticalAlign: 'bottom' }}
                                                />
                                            </Grid.Column>
                                            <Grid.Column width={10}>
                                                <Divider horizontal inverted style={{ fontSize: '20px', }}> INFO</Divider>
                                                <List.Item as='p'>{this.state.overview}</List.Item>
                                                <Table basic='very' inverted >
                                                    <Table.Body>
                                                        <Table.Row>
                                                            <Table.Cell>Release Date:</Table.Cell>
                                                            <Table.Cell>{this.state.releaseDate}</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell>Number of Episodes:</Table.Cell>
                                                            <Table.Cell>
                                                               {this.state.numberOfEpisodes}
                                                            </Table.Cell>
                                                        </Table.Row>
                                                    </Table.Body>
                                                </Table>
                                                
                                            </Grid.Column>
                                        </Grid>
                                    </List.Item>
                                </List.Item>

                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> CASTS</Divider>
                                    <List horizontal>
                                               
                                    </List>
                                </List.Item>  
                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> Episodes</Divider>
                                            <List>
                                            <EpisodesList episodes={this.state.episodes} id ={this.props.match.params.id}/>
                                            </List>
                                            </List.Item>   
                            </List>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment raised>
                                    <SideBarList title='Opening This week' />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(SeasonDetails);
