import React, { Component } from 'react';
import { Grid, Menu, Tab, Header,Label } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import ContentCard from '../components/SearchResultsCards/ContentCard';
import ReviewCard from '../components/SearchResultsCards/ReviewCard';
import Cookies from 'universal-cookie';
import AdminDeleteUserModal from "../components/AdminDeleteUserModal";

let adminButton = ''
class ProfileDetails extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            notInterested: [],
            wantsToSee: [],
            movies: [],
            tvShows: [],
            profileImage: '',
            userType: ''
        };
    }

    componentDidMount() {
        const cookies = new Cookies();
        let id = this.props.match.params.id;
        adminButton = (cookies.get('obj')) ?
                    ((cookies.get('obj').email === 'admin@gmail.com') ? (<AdminDeleteUserModal id={this.props.match.params.id}/>) : (null)) : (null);
        axios.get('http://localhost:8080/user/' + id)
            .then(function (response) {
                response = response.data.obj;
                let st = this.state;
                st.name = response.firstName + ' ' + response.lastName;
                st.userType = response.userType;
                st.email = response.email;
                st.profileImage = (response.profileImage) ? response.profileImage : require('../images/defaultPicture.jpg');
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
                <Grid style={{ paddingTop: '1em' }}>
                    <Grid.Column width={3}>
                        <Menu vertical fluid inverted borderless>
                            <Menu.Item>
                                <Header as='h1' inverted>{this.state.name}</Header>   
                                <Menu.Menu>
                                <Label>{this.state.userType} </Label>
                                </Menu.Menu>
                                <Menu.Menu>
                                    <img alt={''} src={this.state.profileImage} width={200} />
                                </Menu.Menu>

                                <Menu.Menu>
                                        {adminButton}
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
