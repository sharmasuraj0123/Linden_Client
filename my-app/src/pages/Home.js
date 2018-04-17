import React, { Component } from 'react'
import GridColumn, { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Sidebar, Pagination, Feed, Embed } from 'semantic-ui-react'
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
    fontSize:'25px', 
    paddingTop:'2em',  
    paddingTop:'1em' 
};

const src = require('../images/Logo.png')

class Home extends Component {

    render() {
        return (
            <Segment raised style={SegmentStyle}>
                < NavBar/>
                <List horizontal>
                               <List.Item> 
                                <Embed style={{ fontSize:'25px', width:670, height: 400}}
                                autoplay='true'
                                brandedUI
                                id='uMDVa4yoCWw'
                                placeholder={require("../images/featured.jpg")}
                                source='youtube'
                                />
                                <Header> Blockers</Header>
                                </List.Item>

                                <List.Item>   
                                <Embed style={{ fontSize:'25px', width:283, height: 400}}
                                autoplay='true'
                                brandedUI
                                id='coOKvrsmQiI'
                                placeholder={require("../images/featured2.jpg")}
                                source='youtube'
                                />
                                <Header> Rampage</Header>   
                                 </List.Item>

                                 <List.Item>   
                                <Embed style={{ fontSize:'25px', width:283, height: 400}}
                                autoplay='true'
                                brandedUI
                                id='coOKvrsmQiI'
                                placeholder={require("../images/featured2.jpg")}
                                source='youtube'
                                />
                                <Header> Rampage</Header>   
                                 </List.Item>

                                 <List.Item>   
                                <Embed style={{ fontSize:'25px', width:283, height: 400}}
                                autoplay='true'
                                brandedUI
                                id='coOKvrsmQiI'
                                placeholder={require("../images/featured2.jpg")}
                                source='youtube'
                                />
                                <Header> Rampage</Header>   
                                 </List.Item>
                                 </List> 
                <Grid columns divided style={{ paddingTop: '' }}>
                    <Grid.Column width={12}>
                        <Divider horizontal style={{ fontSize:'25px'}}> Fall Collections</Divider>
                        <List horizontal>
                        <List.Item>
                        </List.Item>
                        <List.Item>
                        {/* <DescriptionCard imagesrc = {require('../images/Fall.png')}/> */}
                        </List.Item>
                        </List>
                        <List horizontal>
                            <List.Item style={{ paddingRight:'5em'}}>
                            <DescriptionCard imagesrc = {require('../images/VerifiedFall.png')} verticalAlign= 'top'/>
                            </List.Item >
                            <List.Item >
                                <FeaturedCard verticalAlign= 'middle'/>
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
                            <List.Item style={{ paddingRight:'5em'}}>
                            <DescriptionCard imagesrc = {require('../images/Fall.png')} verticalAlign= 'top'/>
                            </List.Item>
                            <List.Item >
                                <FeaturedCard verticalAlign= 'middle'/>
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
                        <Image.Group size='small' divided>
                            <Image src={require('../images/new1.png')} style={{ width: 200, height: 200 }} />
                            <Image src={require('../images/murder.jpeg')} style={{ width: 200, height: 200 }} />
                            <Image src={require('../images/new3.png')} style={{ width: 200, height: 200 }} />
                            <Image src={require('../images/new4.png')} style={{ width: 200, height: 200 }} />  
                        </Image.Group>
                        <Divider horizontal style={DividerStyle}>Headlines Today</Divider>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label>
                                </Feed.Label>
                                <Feed.Content>
                                    You added Elliot Fu to the group <a>Coworkers</a>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
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
                        </Feed>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label>
                                </Feed.Label>
                                <Feed.Content>
                                    You added Elliot Fu to the group <a>Coworkers</a>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label>
                                </Feed.Label>
                                <Feed.Content>
                                    You added Elliot Fu to the group <a>Coworkers</a>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </Grid.Column>
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
                </Grid>
                <Footer/>
            </Segment>
        );
    }
}

export default Home;
