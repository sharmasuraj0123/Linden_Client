import React, { Component } from 'react'
// eslint-disable-next-line
import { Divider, Grid, Header, Image, List, Segment, Feed, Embed } from 'semantic-ui-react'
import FeaturedCard from "../components/FeaturedCard";
import DescriptionCard from "../components/DescriptionCard";
import SideBarList from "../components/SideBarList";

import FeaturedMovieCarousal from "../components/FeaturedMovieCarousal";

// const DividerStyle = {
//     fontSize: '25px',
//     paddingTop: '2em',
// };

class Home extends Component {

    render() {
        return (
            <div>

                <Grid divided style={{ paddingTop: '' }}>
                    <Grid.Column width={12}>
                        <List>
                            <List.Item>
                                <FeaturedMovieCarousal />
                            </List.Item>
                        </List>
                        <Divider horizontal inverted style={{ fontSize: '30px' }}> Summer Collections</Divider>
                        <List horizontal>
                            <List.Item>
                            </List.Item>
                            <List.Item>
                                {/* <DescriptionCard imagesrc = {require('../images/Fall.png')}/> */}
                            </List.Item>
                        </List>
                        <List horizontal>
                            <List.Item style={{}}>
                                <DescriptionCard imagesrc={require('../images/Fall.png')} verticalAlign='top' />
                            </List.Item >
                            <List.Item >
                                <FeaturedCard verticalAlign='middle' />
                            </List.Item>
                            <List.Item>
                                <FeaturedCard />
                            </List.Item>
                            <List.Item>
                                <FeaturedCard />
                            </List.Item>
                        </List>

                        <Divider inverted />

                        <List horizontal >
                            <List.Item style={{}}>
                                <DescriptionCard imagesrc={require('../images/Winter.png')} verticalAlign='top' />
                            </List.Item>
                            <List.Item >
                                <FeaturedCard verticalAlign='middle' />
                            </List.Item>
                            <List.Item>
                                <FeaturedCard />
                            </List.Item>
                            <List.Item>
                                <FeaturedCard />
                            </List.Item>

                        </List>

                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment raised>

                            <SideBarList title='OPENING THIS WEEK' data='Avengers' />

                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Home;
