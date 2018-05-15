import React, { Component } from 'react';
import { Grid, Menu, Tab } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import AdminReviewCard from "../components/AdminReviewCard";
import AddMovieModal from "../components/AddMovieModal";
import PromotionApplicationCard from "../components/PromotionApplicationCard";
import Cookies from 'universal-cookie';



class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            notInterested: [],
            wantsToSee: [],
            reports: [],
            applications: []
        };
    }

    componentDidMount() {

        const cookies = new Cookies();
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.get('http://localhost:8080/admin/viewReports',
            {
                headers: {
                    token: 'token'
                }
            }).then(function (response) {
                response = response.data;
                console.log(response);
     
                let st = this.state;
                st.reports = response.reports
                this.setState(st);
               
            }.bind(this)); 

        axios.get('http://localhost:8080/admin/viewPromotionApplications',
            {
                headers: {
                    token: 'token'
                }
            }).then(function (response) {
                response = response.data;
                console.log(response);
     
                let st = this.state;
                st.applications = response.applications
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
                                <Menu.Header as='h1'>ADMIN</Menu.Header>
                                <Menu.Menu>
                                    <img alt={''} src={require("../images/defaultPicture.jpg")} width={200} />
                                    <Menu.Item >
                                        <AddMovieModal/>
                                        </Menu.Item>
                                </Menu.Menu>
                            </Menu.Item>
                        </Menu>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Tab  menu={{ secondary: true, pointing: true, inverted: true ,}} 
                        panes = {[
                            { menuItem: 'Reports', render: () => <Tab.Pane attached={false} inverted> <AdminReviewCard reports = {this.state.reports}/></Tab.Pane> },
                            { menuItem: 'Application', render: () => <Tab.Pane attached={false} inverted><PromotionApplicationCard applications = {this.state.applications}/></Tab.Pane> },
                        ]} />

                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(Admin);
