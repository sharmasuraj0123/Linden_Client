import React, { Component } from 'react'
import { Divider, Grid, Header, Image, List, Segment, Feed, Embed } from 'semantic-ui-react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";
import DescriptionCard from "../components/DescriptionCard";
import SideBarList from "../components/SideBarList";

const SegmentStyle = {
    flex: 1,
    marginLeft: "16em",
    marginRight: "16em",
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
<<<<<<< HEAD
                               <List.Item> 
                                <Embed style={{ fontSize:'25px', width:225, height: 351}}
                                autoplay='true'
                                brandedUI
                                id='uMDVa4yoCWw'
                                placeholder={require("../images/featured.jpg")}
                                source='youtube'
                                />
                                </List.Item>

                                <List.Item>   
                                <Embed style={{ fontSize:'25px', width:225, height: 351}}
                                autoplay='true'
                                brandedUI
                                id='coOKvrsmQiI'
                                placeholder={require("../images/certifiedmovie1.jpg")}
                                source='youtube'
                                /> 
                                 </List.Item>

                                 <List.Item>   
                                <Embed style={{ fontSize:'25px', width:225, height: 351}}
                                autoplay='true'
                                brandedUI
                                id='coOKvrsmQiI'
                                placeholder={require("../images/certifiedmovie1.jpg")}
                                source='youtube'
                                /> 
                                 </List.Item>
                                 <List.Item>   
                                <Embed style={{ fontSize:'25px', width:225, height: 351}}
                                autoplay='true'
                                brandedUI
                                id='coOKvrsmQiI'
                                placeholder={require("../images/certifiedmovie1.jpg")}
                                source='youtube'
                                /> 
                                 </List.Item>

                            
                                 <List.Item>   
                                <Embed style={{ fontSize:'25px', width:225, height: 351}}
                                autoplay='true'
                                brandedUI
                                id='coOKvrsmQiI'
                                placeholder={require("../images/certifiedmovie2.jpg")}
                                source='youtube'
                                />   
                                 </List.Item>
                                 </List> 
                <Grid columns divided style={{ paddingTop: '' }}>
                    <Grid.Column width={12}>
                        <Divider horizontal style={{ fontSize:'20px'}}> Fall Collections</Divider>
                        <List horizontal>
                        <List.Item>
                        </List.Item>
                        <List.Item>
                        {/* <DescriptionCard imagesrc = {require('../images/Fall.png')}/> */}
                        </List.Item>
                        </List>
                        <List horizontal>
                            <List.Item style={{ }}>
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
                           </List>
                          
                           <Divider />

                            <List horizontal >
                            <List.Item style={{ }}>
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
                            
                        </List>
                        <Divider horizontal style={DividerStyle}>News and features</Divider>
                        <Image.Group size='small' divided>
                            <Image src={require('../images/new1.png')} style={{ width: 320, height: 250 }} />
                            <Image src={require('../images/new4.png')} style={{ width: 320, height: 250 }} />
                            <Image src={require('../images/new3.png')} style={{ width: 320, height: 250 }} />
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
                        <Segment raised>
                            <List divided>
                            <List.Item>
                            <SideBarList title='Opening This week' />
                            </List.Item>
                            <List.Item>
                            <SideBarList title='Coming Soon' />
                            </List.Item>
                            <List.Item>
                            <SideBarList title='Critic Picks' />
                            </List.Item>
                            </List>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Footer/>
=======
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
>>>>>>> 268e4ca63fe444093f571aa5689d870e1c805b4e
            </Segment>
        );
    }
}

export default Home;
