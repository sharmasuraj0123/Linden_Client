import React, { Component } from 'react'
import { Line, Circle } from 'rc-progress';
import GridColumn, { Container, Divider, Dropdown, Tab,Table,Grid, Button,Form,Header, Image, List, Progress,Menu, Rating,Card,Segment, Sidebar, Pagination, Feed, Embed } from 'semantic-ui-react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FeaturedCard from "../components/FeaturedCard";
import DescriptionCard from "../components/DescriptionCard";
import SideBarList from "../components/SideBarList";
import ReviewCard from "../components/ReviewCard";




const commentPanes = [
    { menuItem: 'All Critics', render: () => <Tab.Pane attached={false}><ReviewCard/></Tab.Pane> },
    { menuItem: 'Top Critics', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Audience', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Fall', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Winter', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  ]


class MovieDetails extends Component {

    render() {
        var options = {
            strokeWidth: 2
        };

        // For demo purposes so the container has some dimensions.
        // Otherwise progress bar won't be shown
        var containerStyle = {
            width: '200px',
            height: '200px'
        };

        return (
            <div>
                <Grid columns>
                <Grid.Column width={12}>
                
                    <Segment inverted>
                        <List vertical>
                            <List.Item >
                            <Segment inverted>
                            <List.Item >
                                <Header  as='h2'   inverted style={{ fontSize:'3em',   color: '#ffffff',}}>Gandhi</Header>
                            </List.Item>
                            <List.Item>
                                <Embed 
                                    id='O6Xo21L0ybE'
                                    placeholder= {require("../images/testMovieTrailer.jpg")}
                                    source='youtube'
                                 />   
                                 </List.Item>

                    
                                <List.Item>
                                <Grid columns >
                                 <Grid.Column width={5}>
                                 <Image  bordered
                                    src={require("../images/certifiedmovie2.jpg")} 
                                    style={{ width: 280, verticalAlign: 'bottom' }}
                                /> 
                                  </Grid.Column>

                                  <Grid.Column width={10}>
                                    <Divider horizontal inverted style={{ fontSize:'20px',}}> INFO</Divider>
                                    <List.Item as='p'>It was Richard Attenborough's lifelong dream to bring the life story of Indian political and spiritual leader Mahatma Gandhi to the screen. When it finally reached fruition in 1982, the 188-minute, Oscar-winning Gandhi was one of the most exhaustively thorough biopics ever made. The film begins in the early part of the 20th century, when Mohandas K. Gandhi (Ben Kingsley), a British-trained lawyer, forsakes all worldly possessions to take up the cause of Indian independence. Faced with armed resistance from the British government, Gandhi adopts a policy of "passive resistance," endeavoring to win freedom for his people without resorting to bloodshed. In the horrendous "slaughter" sequence, more extras appear on screen than in any previous historical epic. The supporting cast includes Candice Bergen as photographer Margaret Bourke-White, Athol Fugard as General Smuts, John Gielgud as Lord Irwin, John Mills as the viceroy, Martin Sheen as Walker, Trevor Howard as Judge Broomfield, and, in a tiny part as a street bully, star-to-be Daniel Day-Lewis. Gandhi won eight Academy Awards, including Best Picture, Best Actor, and Best Director.
                                    </List.Item>
                                    
                                    <Table basic='very' inverted >
                                        <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>Rating:</Table.Cell>
                                            <Table.Cell>PG</Table.Cell>
            
                                            
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Genre:</Table.Cell>
                                            <Table.Cell>Classics, Drama</Table.Cell>
                                            
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>Runtime:</Table.Cell>
                                            <Table.Cell>191 minutes</Table.Cell>    
                                        </Table.Row>
                                        </Table.Body>
                                    </Table>    
                                    </Grid.Column>
                                    </Grid>
                                    </List.Item>  
                                </Segment>    
                            </List.Item>

                            <List.Item>
                                

                               <Grid columns>
                               
                                

                    
                                 <Grid.Column width={6}>
                                 <List  horizontal divided>
                                        <List.Item as='a'  >Critics</List.Item>
                                        <List.Item as='a'>Top Critics</List.Item>
                                    </List>
                                    <Circle percent="98" strokeWidth="5" 
                                    strokeColor="white" 
                                    strokeColor = 'blue'
                                    prefixCls ='98'
                                    strokeLinecap = "butt"
                                    style={{ width:'100',height:'100'}}/>
                                    <Progress percent={98}  inverted progress='percent' size='medium' >
                                    <Header  style={{ fontSize:'30px',color: '#ffffff'}}>
                                        LINDOMETER
                                        </Header> 
                                    </Progress>
                                    <Rating  defaultRating={3} maxRating={5}   inverted disabled size='massive'/> 
                                    <Header  style={{ fontSize:'30px',color: '#ffffff'}}>
                                        Score
                                        </Header> 
                                    
                                    <List.Item>
                                        <p> Review Considered: 22</p>
                                        
                                    </List.Item>
                                    <List.Item>
                                        <p>  Average Rating: 4.6/10</p>
                                    </List.Item>
                                    <List.Item>
                                        <p> Winter: 30</p>
                                    </List.Item>
                                    <List.Item>
                                        <p> Fall: 22</p>
                                    </List.Item>
                                     </Grid.Column>


                                <Grid.Column width={8}>
                                <List> 
                                    <List.Item>
                                    <Header style={{ fontSize:'20px', color: '#ffffff'}}>
                                        Add your Rating
                                        </Header> 
                                    </List.Item>
                                    <List.Item>
                                        <List horizontal>
                                        <List.Item>
                                    <Image floated='left'  size='tiny' src={require('../images/dhoni.jpeg')}  />
                                    </List.Item>
                                    <List.Item >
                                    <Rating maxRating={5} clearable  size='massive'  style={{ color: 'white'}}/> 
                                    <Form reply fluid>
                                        <Form.TextArea width={100}/>
                                        <Button content='Post A Review' labelPosition='left' icon='edit'  />
                                    </Form>
                                        </List.Item>
                                        </List>
                                    </List.Item>
                                    </List>
                                </Grid.Column>
                                </Grid>      
                            </List.Item>




                            


                            <List.Item>
                            <Divider inverted horizontal style={{ fontSize:'20px'}}> CASTS</Divider>
                            </List.Item>


                            <List.Item>
                            <Divider  inverted horizontal style={{ fontSize:'20px'}}> Reviews</Divider>
                            <Tab menu={{ secondary: true, pointing: true, inverted:true }} panes={commentPanes} />
                            </List.Item>

                             <List.Item>
                            <Divider horizontal inverted style={{ fontSize:'20px'}}> Photos</Divider>
                            <Image.Group size='small'>
                            <Image src={require('../images/dhoni.jpeg')} />
                            <Image src={require('../images/dhoni.jpeg')} />
                            <Image src={require('../images/dhoni.jpeg')} />
                            <Image src={require('../images/dhoni.jpeg')} />
                            <Image src={require('../images/dhoni.jpeg')} />
                            </Image.Group>
                            </List.Item>

                             <List.Item>
                            <Divider horizontal inverted style={{ fontSize:'20px'}}> Videos</Divider>
                            </List.Item>
                        </List>
                    </Segment>
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

export default MovieDetails;
