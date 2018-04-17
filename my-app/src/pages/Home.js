import React, { Component } from 'react'
import { Divider, Grid, Header, Image, List, Segment, Feed, Embed } from 'semantic-ui-react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";
import DescriptionCard from "../components/DescriptionCard";
import SideBarList from "../components/SideBarList";

const SegmentStyle = {
    flex: 1,
    marginLeft: "3em",
    marginRight: "3em",
};

const DividerStyle = {
    fontSize: '25px',
    paddingTop: '2em'
};

class Home extends Component {

    render() {
        return (
            <Segment raised style={SegmentStyle}>
                <NavBar />
                <List horizontal>
                    <List.Item>
                        <Embed style={{ fontSize: '25px', width: 670, height: 400 }}
                            autoplay
                            brandedUI
                            id='uMDVa4yoCWw'
                            placeholder={require("../images/featured.jpg")}
                            source='youtube'
                        />
                        <Header> Blockers</Header>
                    </List.Item>

                    <List.Item>
                        <Embed style={{ fontSize: '25px', width: 283, height: 400 }}
                            autoplay
                            brandedUI
                            id='coOKvrsmQiI'
                            placeholder={require("../images/featured2.jpg")}
                            source='youtube'
                        />
                        <Header> Rampage</Header>
                    </List.Item>
                </List>
                <Divider horizontal style={DividerStyle}> Fall Collections</Divider>
                <List horizontal>
                    <List.Item style={{ paddingRight: '5em' }}>
                        <DescriptionCard imagesrc={require('../images/VerifiedFall.png')} verticalAlign='top' />
                    </List.Item>
                    <List.Item>
                        <FeaturedCard verticalAlign='middle' />
                    </List.Item>
                    <List.Item>
                        <FeaturedCard />
                    </List.Item>
                    <List.Item>
                        <FeaturedCard />
                    </List.Item>
                    <List.Item>
                        <FeaturedCard />
                    </List.Item>
                    <List.Item>
                        <FeaturedCard />
                    </List.Item>
                </List>
                <Divider />
                <List horizontal >
                    <List.Item style={{ paddingRight: '5em' }}>
                        <DescriptionCard imagesrc={require('../images/Fall.png')} verticalAlign='top' />
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
                    <List.Item>
                        <FeaturedCard />
                    </List.Item>
                    <List.Item>
                        <FeaturedCard />
                    </List.Item>
                </List>
                <Divider horizontal style={DividerStyle}>News and features</Divider>
                <Image.Group size='small'>
                    <Image src={require('../images/murder.jpeg')} style={{ width: 150, height: 150 }} />
                    <Image src={require('../images/rush.jpeg')} style={{ width: 150, height: 150 }} />
                    <Image src={require('../images/thor.jpg')} style={{ width: 150, height: 150 }} />
                    <Image src={require('../images/dhoni.jpeg')} style={{ width: 150, height: 150 }} />
                </Image.Group>
                <Divider horizontal style={DividerStyle}>Headlines Today</Divider>
                <Feed>
                    <Feed.Event>
                        <Feed.Content>
                            You added Elliot Fu to the group <a>Coworkers</a>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Content>
                            You added Elliot Fu to the group <a>Coworkers</a>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Content>
                            You added Elliot Fu to the group <a>Coworkers</a>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Content>
                            You added Elliot Fu to the group <a>Coworkers</a>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Content>
                            You added Elliot Fu to the group <a>Coworkers</a>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Content>
                            You added Elliot Fu to the group <a>Coworkers</a>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Content>
                            You added Elliot Fu to the group <a>Coworkers</a>
                        </Feed.Content>
                    </Feed.Event>
                    <Feed.Event>
                        <Feed.Content>
                            You added Elliot Fu to the group <a>Coworkers</a>
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
                <Grid.Column width={4}>
                    <Segment raised >
                        <SideBarList title='Opening This week' />
                    </Segment>
                    <Segment raised >
                        <SideBarList title='Coming Soon' />
                    </Segment>
                    <Segment raised >
                        <SideBarList title='Critic Picks' />
                    </Segment>
                </Grid.Column>
                <Footer />
            </Segment>
        );
    }
}

export default Home;
