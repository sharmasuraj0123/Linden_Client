import React, { Component } from 'react';
import { Grid, Menu, Tab } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import UserFollowModal from "../components/UserFollowModal";
import BookmarkComponent from "../components/BookmarkComponent";

const panes = [
    { menuItem: 'Bookmarks', render: () => <Tab.Pane attached={false} inverted> <BookmarkComponent /></Tab.Pane> },
    { menuItem: 'Movie Ratings', render: () => <Tab.Pane attached={false} inverted>Tab 3 Content</Tab.Pane> },
    { menuItem: 'TV Ratings', render: () => <Tab.Pane attached={false} inverted>Tab 3 Content</Tab.Pane> },
]

class ProfileDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            notInterested: [],
            wantsToSee: []
        };
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:8080/user/' + id)
            .then(function (response) {
                response = response.data.obj;
                console.log(response);
                this.setState({
                    name: response.firstName + ' ' + response.lastName,
                    email: response.email
                });
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
                                    <Menu.Item name='Manage Account' />
                                </Menu.Menu>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Tab menu={{ secondary: true, pointing: true, inverted: true }} panes={panes} />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(ProfileDetails);
