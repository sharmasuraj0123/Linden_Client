import React, { Component } from 'react';
import { Segment, Grid, List, Tab, Divider,Header } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import SideBarList from "../components/SideBarList";
import ContentCard from '../components/SearchResultsCards/ContentCard';

class CastDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            movies: [],
            tvShows: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:8080/cast/' + id)
            .then(function (response) {
                let data = response.data;
                let cast = data.actors[0];
                console.log(data);
                this.setState({
                    name: cast.firstName + ' ' + cast.lastName,
                    movies: data.movies,
                    imgUrl: cast.imageURL,
                    tvShows: data.tvShows
                });
            }.bind(this));
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={12} centered style={{ paddingTop: '2em' }}>
                        <Segment raised>
                            <List centered>
                            <List.Item >      
                                    <Header colSpan='3' style={{ fontSize: '3em' }}>{this.state.name}</Header>            
                                </List.Item>
                                <List.Item>
                                    <img alt={''} src={this.state.imgUrl}
                                        style={{ width: 216, height: 319 }} />
                                </List.Item>
                               
                            </List>
                        </Segment>
                        <Divider horizontal inverted style={{ fontSize: '20px' }}> FILMOGRAPHY</Divider>
                        <Tab menu={{ secondary: true, pointing: true, inverted: true }}
                            panes={[
                                {
                                    menuItem: 'Movies', render: () =>
                                        <Tab.Pane attached={false}>
                                            <ContentCard contents={this.state.movies} />
                                        </Tab.Pane>
                                },
                                {
                                    menuItem: 'TV Shows', render: () =>
                                        <Tab.Pane attached={false}>
                                            <ContentCard contents={this.state.tvShows} />
                                        </Tab.Pane>
                                }
                            ]}
                        />
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment raised>
                            <List divided>
                                <List.Item>
                                    <SideBarList title='Opening This week' />
                                </List.Item>
                            </List>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(CastDetails);
