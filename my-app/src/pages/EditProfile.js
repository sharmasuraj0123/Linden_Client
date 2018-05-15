import React, { Component } from 'react';
import { Grid, Menu, Button, Tab, Form, Header, Segment, Divider } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import validator from 'validator';
import DeleteUserModal from '../components/DeleteUserModal';
import ContentCard from '../components/SearchResultsCards/ContentCard';
import ReviewCard from '../components/SearchResultsCards/ReviewCard';

const cookies = new Cookies();
let email = '';
let newPass = '';
let rePass = '';

class ProfileDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            profileImage: null,
            notInterested: [],
            wantsToSee: [],
            movies: [],
            tvShows: [],
            userType: ''
        };
    }

    componentDidMount() {
        // to-do add route if user not logged in.
        let token = cookies.get('obj').token;
        let id = cookies.get('obj').id;
        axios.get('http://localhost:8080/user/profile', {
            headers: {
                token: token
            }
        })
            .then(function (response) {
                console.log(response.data);
                response = response.data.obj;
                let st = this.state;
                st.firstName = response.firstName;
                st.lastName = response.lastName;
                st.email = response.email;
                st.profileImage = response.profileImage;
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

        axios.get('http://localhost:8080/user/' + id + '/reviewHistory/tvShows')
            .then(function (response) {
                let st = this.state;
                st.tvShows = response.data.reviewHistory;
                this.setState(st);
            }.bind(this));

    }

    selectFileHandler = event => {
        let reader = new FileReader();
        reader.onloadend = () => {
            axios.post('http://localhost:8080/user/profile/uploadImage', {
                image: reader.result,
                token: cookies.get('obj').token
            })
                .then(function (response) {
                    let st = this.state;
                    st.profileImage = reader.result;
                    this.setState(st);
                }.bind(this));
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    handleChangePassword = event => {
        if (newPass === '' || newPass !== rePass) {
            let message = (newPass === '') ? 'Password can\'t be empty' : 'Passwords don\'t match';
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            axios.post('http://localhost:8080/user/editCredentials', {
                password: newPass,
                token: cookies.get('obj').token
            })
                .then(function (response) {
                    console.log(response.data);
                    toast.success('Password successfully changed!', {
                        position: toast.POSITION.TOP_CENTER
                    });
                });
        }
    }

    handleChangeEmail = event => {
        let app = this;
        if (!validator.isEmail(email)) {
            toast.error('Email is not valid', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else {
            axios.post('http://localhost:8080/user/editCredentials', {
                email: email,
                token: cookies.get('obj').token
            })
                .then(function (response) {
                    console.log(response.data);
                    let st = app.state;
                    st.email = email;
                    app.setState(st);
                    toast.success('E-mail Changed Successfully!', {
                        position: toast.POSITION.TOP_CENTER
                    });
                })
                .catch(function(error){
                    toast.error(error, {
                        position: toast.POSITION.TOP_CENTER
                    });
                });
        }
    }

    render() {
        return (
            <div >
                <Grid style={{ paddingTop: '1em' }}>
                    <Grid.Column width={3}>
                        <Menu vertical fluid inverted>
                            <Menu.Item>
                                <Menu.Menu>
                                    <img
                                        alt={''}
                                        src={this.state.profileImage}
                                        width={200}
                                    />
                                    <input
                                        style={{
                                            padding: '15px'
                                        }}
                                        type='file'
                                        onChange={this.selectFileHandler}
                                    />
                                    <DeleteUserModal />
                                </Menu.Menu>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Tab
                            menu={{ secondary: true, pointing: true, inverted: true }}
                            panes={[
                                {
                                    menuItem: 'Info', render: () =>
                                        <Tab.Pane attached={false} inverted>
                                            <Segment>
                                                <Header as='h3'>{'First Name: ' + this.state.firstName}</Header>
                                                <Header as='h3'>{'Last Name: ' + this.state.lastName}</Header>
                                                <Header as='h3'>{'E-Mail: ' + this.state.email}</Header>
                                            </Segment>
                                        </Tab.Pane>
                                },
                                {
                                    menuItem: 'Edit Info', render: () =>
                                        <Tab.Pane attached={false} inverted>
                                            <Segment>
                                                <Header as='h1'>Change E-mail</Header>
                                                <Form>
                                                    <Form.Input
                                                        label='Please enter your new e-mail'
                                                        onChange={(e, data) => email = data.value}
                                                        placeholder='joe@schmoe.com' />
                                                    <Button
                                                        color='teal'
                                                        basic
                                                        onClick={(event, data) => this.handleChangeEmail()}>
                                                        Change e-mail
                                                    </Button>
                                                </Form>
                                                <Divider section />
                                                <Form>
                                                    <Header as='h1'>Change Password</Header>
                                                    <Form.Input
                                                        label='Enter your new password'
                                                        type='password'
                                                        onChange={(e, data) => newPass = data.value}
                                                        placeholder='Enter you new Password' />
                                                    <Form.Input
                                                        label='Re-enter password'
                                                        type='password'
                                                        onChange={(e, data) => rePass = data.value}
                                                        placeholder='Re-enter password' />
                                                    <Button
                                                        color='teal'
                                                        basic
                                                        onClick={(event, data) => this.handleChangePassword()}>
                                                        Change Password
                                                    </Button>
                                                </Form>
                                            </Segment>
                                        </Tab.Pane>
                                },
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
