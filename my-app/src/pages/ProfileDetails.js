import React, { Component } from 'react';
import {Segment,Grid,Menu, Tab } from 'semantic-ui-react';

import NavBar from "../components/NavBar";
import UserFollowModal from "../components/UserFollowModal";
import BookmarkComponent from "../components/BookmarkComponent";


const panes = [
    { menuItem: 'Bookmarks', render: () => <Tab.Pane attached={false} inverted> <BookmarkComponent/></Tab.Pane> },
    { menuItem: 'Movie Ratings', render: () => <Tab.Pane attached={false} inverted>Tab 3 Content</Tab.Pane> },
    { menuItem: 'TV Ratings', render: () => <Tab.Pane attached={false} inverted>Tab 3 Content</Tab.Pane> },
  ]

class ProfileDetails extends Component {
    render() {
        return (
            <div >
            <Grid  columns style={{ paddingTop:'1em' }}>
            <Grid.Column width={3}>
                <Menu vertical fluid inverted>
                     <Menu.Item>
                        <Menu.Header>SURAJ SHARMA</Menu.Header>
                        <Menu.Menu>
                        <img src= {require("../images/defaultPicture.jpg")} width={200} />
                        <Menu.Item name='Manage Account' />
                        </Menu.Menu>
                    </Menu.Item>    
                    <Menu.Item>
                        <Menu.Header>ACTIVITY</Menu.Header>
                        <Menu.Menu>
                            <Menu.Item> <UserFollowModal/></Menu.Item>
                            <Menu.Item> Following: 22</Menu.Item>
                        </Menu.Menu>
                    </Menu.Item>
                     <Menu.Item>
                        <Menu.Header>ABOUT</Menu.Header>
                        <Menu.Menu>       
                        </Menu.Menu>
                    </Menu.Item>
                </Menu>
            </Grid.Column>
            <Grid.Column width={12}>
            <Tab   menu={{ secondary: true, pointing: true, inverted : true }} panes={panes} />
            </Grid.Column>
            </Grid>
            </div>
        );
    }
}

export default ProfileDetails