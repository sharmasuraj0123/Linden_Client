import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Divider, Table, Grid, Header, Image, List, Segment } from 'semantic-ui-react'
import SideBarList from "../components/SideBarList";
import EpisodesList from "../components/EpisodesList";

class SeasonDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            genre: [],
            cast: [],
            episodes: [],
            seasons:[]
        }
    }

    componentDidMount() {
        let tvShowId = this.props.match.params.tvShowId;
        let seasonNumber = this.props.match.params.seasonNumber;
        axios.get('http://localhost:8080/tvShow/' + tvShowId + '/season/' + seasonNumber)
            .then(function (response) {
                let season = response.data.season;
                console.log(season);
                this.setState({
                    id:tvShowId,
                    seasonNumber: season.seasonNumber,
                    overview: season.details,
                    cast: season.cast,
                    numberOfEpisodes: season.numberOfEpisodes,
                    poster: season.poster,
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
                                            SEASON {this.state.seasonNumber}
                                        </Header>
                                    </List.Item >
                                    <List.Item>
                                        <Grid>
                                            <Grid.Column width={5}>
                                                <Image bordered
                                                    src={this.state.poster}
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
                                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> SEASONS</Divider>
                                            <List horizontal>
                                            {/* <SeasonsList seasons={this.state.seasons} id ={this.state.id}/> */}
                                            </List>
                                            </List.Item>
                                            </Grid.Column>
                                        </Grid>
                                    </List.Item>
                                </List.Item>

                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> Episodes</Divider>
                                    <List>
                                        <EpisodesList episodes={this.state.episodes} id={this.props.match.params.id} />
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
