import React, { Component } from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

class ProfileDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            image: require("../images/defaultPicture.jpg")
        };
    }

    componentDidMount() {
        // let id = this.props.match.params.id;
        // axios.get('http://localhost:8080/user/' + id)
        //     .then(function (response) {
        //         response = response.data.obj;
        //         let st = this.state;
        //         st.name = response.firstName + ' ' + response.lastName;
        //         st.email = response.email;
        //         this.setState(st);
        //     }.bind(this));

    }

    selectFileHandler = event => {
        const cookies = new Cookies();
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

    render() {
        return (
            <div >
                <Grid columns style={{ paddingTop: '1em' }}>
                    <Grid.Column width={3}>
                        <Menu vertical fluid inverted>
                            <Menu.Item>
                                <Menu.Header as='h1'>{this.state.name}</Menu.Header>
                                <Menu.Menu>
                                    <img
                                        alt={''}
                                        src={this.state.image}
                                        width={200}
                                    />
                                    <input
                                        type='file'
                                        onChange={this.selectFileHandler}
                                    />
                                </Menu.Menu>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>

                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(ProfileDetails);
