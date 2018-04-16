import React, { Component } from 'react'
<<<<<<< HEAD
import GridColumn, { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Sidebar, Pagination, Feed, Embed } from 'semantic-ui-react'
=======
import { Divider, Grid, Image, List, Segment, Feed } from 'semantic-ui-react'
>>>>>>> bff03d2858dd942b78022353e93f26bae49159f7
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

<<<<<<< HEAD
const DividerStyle = {
    fontSize:'25px', 
    paddingTop:'2em',  
    paddingTop:'1em' 
};

const src = require('../images/Logo.png')

=======
>>>>>>> bff03d2858dd942b78022353e93f26bae49159f7
class Home extends Component {

    render() {
        return (
            <Segment raised style={SegmentStyle}>
                < NavBar />
<<<<<<< HEAD


                <Grid columns divided style={{ paddingTop: '2em' }}>
                    <Grid.Column width={12}>
                    <Divider horizontal style={{ fontSize:'25px' }}>Featured</Divider>
                               <List horizontal>
                               <List.Item>
                                <Segment raised style={{ fontSize:'25px', width:500, height: 350}}>
                                <Embed
                                autoplay='true'
                                brandedUI
                                id='O6Xo21L0ybE'
                                placeholder={require("../images/featured.jpg")}
                                source='youtube'
                                />
                                <Header> Blockers</Header>
                                </Segment>
                                </List.Item>
                                <List.Item>
                                 
                                 <Segment raised style={{ fontSize:'25px', width:500, height: 350}}>
                                <Embed
                                autoplay='true'
                                brandedUI
                                id='O6Xo21L0ybE'
                                placeholder={require("../images/featured2.jpg")}
                                source='youtube'
                                />
                                <Header> Rampage</Header>
                                 </Segment>

                                 </List.Item>
                                 </List>

                               
                                

                                

                                
                                

                            

                        <Divider horizontal style={DividerStyle}> Fall Collections</Divider>
=======
                <Grid columns={'equal'} divided style={{ paddingTop: '2em' }}>
                    <Grid.Column width={11}>
                        <Segment>
                            <List horizontal>
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
                        </Segment>
                        <Divider horizontal>Certified Summer Collection</Divider>
>>>>>>> bff03d2858dd942b78022353e93f26bae49159f7
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
<<<<<<< HEAD
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

=======
>>>>>>> bff03d2858dd942b78022353e93f26bae49159f7
                        </List>

<<<<<<< HEAD
                    
                        <Divider horizontal style={DividerStyle}>News and features</Divider>
                        <Image.Group size='small' divided>
=======
                        <Image.Group size='small' divided={'true'}>
>>>>>>> bff03d2858dd942b78022353e93f26bae49159f7
                            <Image src={require('../images/new1.png')} style={{ width: 150, height: 150 }} />
                            <Image src={require('../images/new2.png')} style={{ width: 150, height: 150 }} />
                            <Image src={require('../images/new3.png')} style={{ width: 150, height: 150 }} />
                            <Image src={require('../images/new4.png')} style={{ width: 150, height: 150 }} />
                            
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
                <Footer />
            </Segment>
        );
    }
}

export default Home;
