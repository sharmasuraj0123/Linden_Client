import React, { Component } from 'react';
import { Grid, Menu, Button, Tab, Form, Header, Segment, Divider } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import Cookies from 'universal-cookie';
import validator from 'validator';
import DeleteUserModal from '../components/DeleteUserModal';



const cookies = new Cookies();
let email = '';
let newPass = '';
let rePass = '';

class ProfileDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            profileImage: null
        };
    }

    componentDidMount() {
        // to-do add route if user not logged in.
        let token = cookies.get('obj').token;
        axios.get('http://localhost:8080/user/profile', {
            headers: {
                token: token
            }
        })
            .then(function (response) {
                response = response.data.obj;
                let st = this.state;
                st.name = response.firstName + ' ' + response.lastName;
                st.email = response.email;
                st.profileImage = response.profileImage;
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

    handleDeleteAccount = event => {
        console.log('Delete Acct');
        cookies.remove('obj');
        this.props.history.push('/');
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
        console.log(event);
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
                                <Header as='h2' inverted>{this.state.name}</Header>
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
                                    <DeleteUserModal/>
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
                                        </Tab.Pane>
                                },
                                {
                                    menuItem: 'Change E-mail/Password', render: () =>
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
                                }
                            ]}
                        />
                    </Grid.Column>
                </Grid>
            </div >
        );
    }
}

export default withRouter(ProfileDetails);
