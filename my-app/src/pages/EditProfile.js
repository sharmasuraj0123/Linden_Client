import React, { Component } from 'react';
import { Grid, Menu, Button, Tab, Form, Header, Image } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
let email = '';

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
                console.log(response);
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
                    st.image = reader.result;
                    this.setState(st);
                }.bind(this));
        }
        reader.readAsDataURL(event.target.files[0]);
    }

    handleDeleteAccount = event => {
        console.log('Delete Acct');
    }

    handleChangePassword = event => {

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
                                        style={{ padding: '10px' }}
                                        type='file'
                                        onChange={this.selectFileHandler}
                                    />
                                    <Button
                                        style={{ padding: '25px' }}
                                        content='Delete Account'
                                        negative
                                        onClick={this.handleDeleteAccount}
                                    />
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
                                    menuItem: 'Change email/password', render: () =>
                                        <Tab.Pane attached={false} inverted>
                                            <Header as='h2'>
                                                <Image circular src={this.state.profileImage} />
                                                {' '}{this.state.name}
                                            </Header>
                                            <Form inverted>
                                                <Form.Input
                                                    label='Please enter your new e-mail'
                                                    onChange={(e, data) => email = data.value}
                                                    placeholder='joe@schmoe.com' />
                                                <Button onClick={(event, data) => this.handleChangeEmail()}>Change e-mail</Button>
                                            </Form>
                                            <br />
                                            <Form inverted>
                                                <Form.Input
                                                    label='Enter your new password'
                                                    type='password'
                                                    onChange={(e, data) => email = data.value}
                                                    placeholder='Enter you new Password' />
                                                <Form.Input
                                                    label='Re-enter password'
                                                    type='password'
                                                    onChange={(e, data) => email = data.value}
                                                    placeholder='Re-enter password' />
                                                <Button onClick={(event, data) => this.handleChangePassword()}>Change Password</Button>
                                            </Form>
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
