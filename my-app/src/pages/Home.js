import React, { Component } from 'react'
import { Divider, Grid, Header, Image, List, Segment, Feed, Embed } from 'semantic-ui-react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";
import DescriptionCard from "../components/DescriptionCard";
import SideBarList from "../components/SideBarList";



const DividerStyle = {
    fontSize: '25px',
    paddingTop: '2em',
    
};

class Home extends Component {

    render() {
        return (
            <div>
               
                
                <Grid columns divided style={{ paddingTop: '' }}>
                    <Grid.Column width={12}>
                    <List>
                               <List.Item> 
                               <Embed 
                                    id='O6Xo21L0ybE'
                                    icon='play'
                                    placeholder= {require("../images/testMovieTrailer.jpg")}
                                    source='youtube'
                                 /> 
                                </List.Item>

                                
                                
                                 </List> 
                        <Divider horizontal inverted style={{ fontSize:'30px'}}> Fall Collections</Divider>
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
                          
                           <Divider inverted/>

                            <List horizontal >
                            <List.Item style={{ }}>
                            <DescriptionCard imagesrc = {require('../images/FallCollection.png')} verticalAlign= 'top'/>
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
            </div>
        );
    }
}

export default Home;
