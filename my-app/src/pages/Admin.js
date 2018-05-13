import React, { Component } from 'react';
import { Grid, Menu, Tab } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import AdminReviewCard from "../components/AdminReviewCard";

let review = [{
    "id": 2196,
    "date": "2018-05-13T06:29:23.000+0000",
    "postedBy": {
        "id": 708,
        "firstName": "Suraj",
        "lastName": "Sharma",
        "email": "sharmasuraj0123@gmail.com",
        "password": "$2a$10$UqF/rBuRhMVwAPmDMBIkQ.C48z50P4jSe1XufNFbJfqcLj9YQtKMi",
        "token": "v0mR0Ey1KVjWwSGKNmWEcVNCKcWBtWa4r^quVmYcpawWB8WB35#1ZP5!aYflv3Rz",
        "verifiedAccount": true,
        "userType": "AUDIENCE",
        "wantsToSee": [
            {
                "id": 2197,
                "userId": 708,
                "contentId": 487,
                "contentType": "MOVIE"
            }
        ],
        "notInterested": []
    },
    "contentId": 487,
    "contentType": "MOVIE",
    "details": "It is very Nice.",
    "rating": 4,
    "reviewType": "AUDIENCE",
    "token": "8lhaA!Pc$xEoMWR&n!yaYgz6DlrjpLb87KwtwG$XCGucBNGA574prde0R2v0U0Bv"
}];

class Admin extends Component {

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
                                <Menu.Header as='h1'>ADMIN</Menu.Header>
                                <Menu.Menu>
                                    <img alt={''} src={require("../images/defaultPicture.jpg")} width={200} />
                                    <Menu.Item name='Manage Account' />
                                </Menu.Menu>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Tab menu={{ secondary: true, pointing: true, inverted: true }} 
                        panes = {[
                            { menuItem: 'Reports', render: () => <Tab.Pane attached={false} inverted> <AdminReviewCard reviews = {review}/></Tab.Pane> },
                            { menuItem: 'Application', render: () => <Tab.Pane attached={false} inverted>Tab 3 Content</Tab.Pane> },
                        ]} />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Admin);
