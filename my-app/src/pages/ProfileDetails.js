import React, { Component } from 'react';
import { Grid, Menu, Tab, Segment } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Rating, Card, Item, Label, Divider } from 'semantic-ui-react';
import ContentCard from '../components/SearchResultsCards/ContentCard';
import ReviewCard from '../components/SearchResultsCards/ReviewCard';

class ProfileDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            notInterested: [],
            wantsToSee: [],
            movies: [],
            tvShows: []
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:8080/user/' + id)
            .then(function (response) {
                response = response.data.obj;
                let st = this.state;
                st.name = response.firstName + ' ' + response.lastName;
                st.email = response.email;
                this.setState(st);
            }.bind(this));

        axios.get('http://localhost:8080/user/' + id + '/getWantToSee')
            .then(function (response) {
                let st = this.state;
                st.wantsToSee = response.data.obj;
                this.setState(st);
            }.bind(this));

        axios.get('http://localhost:8080/user/' + id + '/getNotInterested')
            .then(function (response) {
                let st = this.state;
                st.notInterested = response.data.obj;
                this.setState(st);
            }.bind(this));

        axios.get('http://localhost:8080/user/' + id + '/reviewHistory/movies')
            .then(function (response) {
                let st = this.state;
                st.movies = response.data.reviewHistory;
                this.setState(st);
            }.bind(this));

        axios.get('http://localhost:8080/user/' + id + '/reviewHistory/movies')
            .then(function (response) {
                let st = this.state;
                st.movies = response.data.reviewHistory;
                this.setState(st);
            }.bind(this));
    }

    render() {
        return (
            <div >
                <Grid columns style={{ paddingTop: '1em' }}>
                    <Grid.Column width={3}>
                        <Menu vertical fluid inverted>
                            <Menu.Item>
                                <Menu.Header as='h1'>{this.state.name}</Menu.Header>
                                <Menu.Menu>
                                    <img alt={''} src={require("../images/defaultPicture.jpg")} width={200} />
                                </Menu.Menu>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Tab
                            menu={{ secondary: true, pointing: true, inverted: true }}
                            panes={[
                                {
                                    menuItem: 'Watch List', render: () =>
                                        <Tab.Pane attached={false} inverted>
                                            <ContentCard contents={this.state.wantsToSee} />
                                        </Tab.Pane>
                                },
                                {
                                    menuItem: 'Not Interested', render: () =>
                                        <Tab.Pane attached={false} inverted>
                                            <ContentCard contents={this.state.notInterested} />
                                        </Tab.Pane>
                                },
                                {
                                    menuItem: 'Ratings', render: () =>
                                        <Tab.Pane attached={false} inverted>
                                            <ReviewCard reviews={this.state.movies} />
                                            <ReviewCard reviews={this.state.tvShows} />
                                        </Tab.Pane>
                                }
                            ]}
                        />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(ProfileDetails);
