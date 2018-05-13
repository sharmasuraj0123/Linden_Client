import React, { Component } from 'react'
import { Circle } from 'rc-progress';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// eslint-diasble-next-line
import { Divider, Icon, Tab, Table, Grid, Button, Form, Header, Image, List, Menu, Rating, Segment } from 'semantic-ui-react'
import SideBarList from "../components/SideBarList";
import ReviewCard from "../components/ReviewCard";
import CastCard from "../components/CastCard";
import SeasonsList from "../components/SeasonsList";
import Genre from "../components/Genres";

import Cookies from 'universal-cookie';

const commentPanes = [
    { menuItem: 'All Critics', render: () => <Tab.Pane attached={false}><ReviewCard /></Tab.Pane> },
    { menuItem: 'Top Critics', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Audience', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Fall', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Winter', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

let details = ' '

class TvShowDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genres: [],
            cast: [], 
            seasons :[]
        }
    }


     handlePostReview() {
        const cookies = new Cookies();
        let id = this.props.match.params.id;
        let token =  cookies.get('obj').token;
        axios.post('http://localhost:8080/user/postReview',{
        token: token,
        contentId : id,
        contentType : "MOVIE",
        rating : 4,
        details : details
      })
          .then(function (response) {
            response = response.data;
            if (response.status === 'ERROR') {
              console.log('Cannot Log-Out');
            } else {
              response = response.obj;    
              cookies.remove('obj');
            }
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error)
          })
      }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:8080/tvShow/' + id)
            .then(function (response) {
                let tvShow = response.data.tvShow.tvShow;
                console.log(response.data);
                this.setState({
                    name: tvShow.name,
                    overview: tvShow.details,
                    cast: tvShow.cast,
                    genres: tvShow.genre,
                    poster: 'https://image.tmdb.org/t/p/w500' + tvShow.poster,
                    releaseDate: tvShow.releaseDate,
                    seasons: tvShow.seasons
                    
                });
                console.log(this.state.genres);
            }.bind(this));
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={12}>
                        <Segment inverted>
                            <List vertical='true'>
                                <List.Item >
                                    <List.Item >
                                    <Header as='h6' inverted style={{ fontSize: '2.5em', color: '#ffffff', }}>
                                                    {this.state.name}
                                                </Header>
                                    </List.Item >
                                    <List.Item >
                                        <Menu inverted borderless>
                                            <Menu.Item>
                                                <Image circular
                                                    src={require("../images/Fall.png")}
                                                    style={{ width: 70, verticalAlign: 'bottom' }}
                                                />
                                            </Menu.Item>
                                            <Menu.Item>
                                            </Menu.Item>
                                            <Menu.Item position='right'>
                                                <Icon.Group size='huge'>
                                                    <Icon name='bookmark' />
                                                    <Icon size='tiny' color='grey' name='plus' />
                                                </Icon.Group>
                                                <Icon name='hide' size='huge' />
                                            </Menu.Item>
                                        </Menu>
                                    </List.Item>
                                    
                                    <List.Item>
                                        <Grid>
                                            <Grid.Column width={5}>
                                                <Image bordered
                                                    src= {this.state.poster}
                                                    style={{ width: 280, verticalAlign: 'bottom' }}
                                                />
                                            </Grid.Column>
                                            <Grid.Column width={10}>
                                                <Divider horizontal inverted style={{ fontSize: '20px', }}> INFO</Divider>
                                                <List.Item as='p'>{this.state.overview}</List.Item>
                                                <Table basic='very' inverted >
                                                    <Table.Body>
                                                        <Table.Row>
                                                            <Table.Cell>Rating:</Table.Cell>
                                                            <Table.Cell>PG</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell>Release Date:</Table.Cell>
                                                            <Table.Cell>{this.state.releaseDate}</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell>Genre:</Table.Cell>
                                                            <Table.Cell>
                                                                <Genre genres={this.state.genres} />
                                                            </Table.Cell>
                                                        </Table.Row>
                                                    </Table.Body>
                                                </Table>
                                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> SEASONS</Divider>
                                            <List horizontal>
                                            <SeasonsList seasons={this.state.seasons} id ={this.props.match.params.id}/>
                                            </List>
                                            </List.Item>
                                            </Grid.Column>
                                        </Grid>
                                    </List.Item>
                                </List.Item>
                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> Performance</Divider>
                                    <Grid textAlign={'center'}>
                                        <Grid.Column width={4}>

                                            <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                                LINDOMETER
                                        </Header>
                                            <Circle percent="98" strokeWidth="10"
                                                strokeColor="white"
                                                prefixCls='98'
                                                strokeLinecap="butt"
                                                style={{ width: '150', height: '150' }} />
                                            <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                                98 %</Header>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                                AUDIENCE SCORE
                                        </Header>
                                            <Circle percent="98" strokeWidth="10"
                                                strokeColor="white"
                                                prefixCls='98'
                                                strokeLinecap="butt"
                                                style={{ width: '150', height: '150' }} />
                                            <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                                98 %</Header>
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                                Add your Rating
                                            </Header>
                                            <List>
                                                <List.Item>
                                                    <List horizontal>
                                                        <List.Item>
                                                            <Image floated='left' style={{ width: 150, height: 150, verticalAlign: 'bottom' }} src={require('../images/defaultPicture.jpg')} />
                                                        </List.Item>
                                                        <List.Item >
                                                            <Rating maxRating={5} clearable size='large' style={{ color: 'white' }} />
                                                            <Form reply fluid='true' size='large'>
                                                                <Form.TextArea onChange={(e, data) => details = data.value}/>
                                                                <Button content='Post A Review' 
                                                                onClick={(event, data) => this.handlePostReview()}
                                                                labelPosition='left' icon='edit' />
                                                            </Form>
                                                        </List.Item>
                                                    </List>
                                                </List.Item>
                                            </List>
                                        </Grid.Column>
                                    </Grid>
                                </List.Item>
                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> CASTS</Divider>
                                    <List horizontal>
                                            <CastCard casts={this.state.cast}/>     
                                    </List>
                                </List.Item>
                                 
                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> Reviews</Divider>
                                    <Tab menu={{ secondary: true, pointing: true, inverted: true }} panes={commentPanes} />
                                </List.Item>    
                            </List>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment raised>
                                    <SideBarList title='Opening This week' />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(TvShowDetails);
