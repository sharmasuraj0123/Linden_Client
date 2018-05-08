import React, { Component } from 'react'
import { Circle } from 'rc-progress';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// eslint-diasble-next-line
import { Divider, Icon, Tab, Table, Grid, Button, Form, Header, Image, List, Menu, Rating, Segment, Embed } from 'semantic-ui-react'
import SideBarList from "../components/SideBarList";
import ReviewCard from "../components/ReviewCard";
import CastCard from "../components/CastCard";
import Genre from "../components/Genres"

const commentPanes = [
    { menuItem: 'All Critics', render: () => <Tab.Pane attached={false}><ReviewCard /></Tab.Pane> },
    { menuItem: 'Top Critics', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Audience', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Fall', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Winter', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]


class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: [],
            cast: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:8080/movie/' + id)
            .then(function (response) {
                let movie = response.data;
                console.log(movie);
                this.setState({
                    name: movie.name,
                    overview: movie.details,
                    cast: movie.cast,
                    genre: movie.genre
                });
                console.log(this.state.cast);
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
                                        <Menu inverted borderless>
                                            <Menu.Item>
                                                <Image circular
                                                    src={require("../images/Fall.png")}
                                                    style={{ width: 70, verticalAlign: 'bottom' }}
                                                />
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Header as='h6' inverted style={{ fontSize: '3em', color: '#ffffff', }}>
                                                    {this.state.name}
                                                </Header>
                                                <Icon name='time' size='huge' />
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
                                        <Embed
                                            id='O6Xo21L0ybE'
                                            placeholder={require("../images/testMovieTrailer.jpg")}
                                            source='youtube'
                                        />
                                    </List.Item>
                                    <List.Item>
                                        <Grid>
                                            <Grid.Column width={5}>
                                                <Image bordered
                                                    src={require("../images/certifiedmovie2.jpg")}
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
                                                            <Table.Cell>Genre:</Table.Cell>
                                                            <Table.Cell>
                                                                <Genre genres={this.state.genre} />
                                                            </Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell>Runtime:</Table.Cell>
                                                            <Table.Cell>191 minutes</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell>Release Date:</Table.Cell>
                                                            <Table.Cell>May 4, 2018</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell>Box Office Collection:</Table.Cell>
                                                            <Table.Cell>$80,000,000</Table.Cell>
                                                        </Table.Row>
                                                    </Table.Body>
                                                </Table>
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
                                                                <Form.TextArea />
                                                                <Button content='Post A Review' labelPosition='left' icon='edit' />
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
                                    <CastCard casts={this.state.cast}/>
                                </List.Item>
                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> Reviews</Divider>
                                    <Tab menu={{ secondary: true, pointing: true, inverted: true }} panes={commentPanes} />
                                </List.Item>
                                <List.Item>
                                    <Divider horizontal inverted style={{ fontSize: '20px' }}> Photos</Divider>
                                    <Image.Group size='small'>
                                        <Image src={require('../images/dhoni.jpeg')} />
                                        <Image src={require('../images/dhoni.jpeg')} />
                                        <Image src={require('../images/dhoni.jpeg')} />
                                        <Image src={require('../images/dhoni.jpeg')} />
                                        <Image src={require('../images/dhoni.jpeg')} />
                                    </Image.Group>
                                </List.Item>
                                <List.Item>
                                    <Divider horizontal inverted style={{ fontSize: '20px' }}> Videos</Divider>
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

export default withRouter(MovieDetails);
