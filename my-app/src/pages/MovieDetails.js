import React, { Component } from 'react'
import { Circle } from 'rc-progress';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// eslint-diasble-next-line
import { Divider, Icon, Tab, Table, Grid, Button, Form, Header, Image, List, Menu, Rating, Segment, Embed } from 'semantic-ui-react'
import SideBarList from "../components/SideBarList";
import ReviewCard from "../components/ReviewCard";
import CastCard from "../components/CastCard";
import Genre from "../components/Genres";
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';



let details = ' '




class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: [],
            cast: [],
            wantToSee: null,
            notInterested: null,
            audienceReviews:[],
            criticsReviews: [],
            myReview:[],
            reviews:[],
            lindenMeter: 0
        }
    }

    componentDidMount() {
        const cookies = new Cookies();
        let id = this.props.match.params.id;
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        let email = (cookies.get('obj')) ? cookies.get('obj').email : null;

        axios.get('http://localhost:8080/movie/' + id,
            {
                headers: {
                    token: token
                }
            })
            .then(function (response) {
                let movie = response.data.movie;

                let audienceReviews = [];
                let criticsReviews = [];
                let myReview= [];
                let allReviews = movie.reviews;
                
                
                allReviews.forEach((review) => {
                if(review.postedBy.email === email){
                    myReview.push(review);
                }
                else if(review.reviewType==='AUDIENCE'){
                            audienceReviews.push(review);
                   }else if(review.reviewType==='CRITIC'){
                    criticsReviews.push(review);
                   }    
                  })

                  console.log(audienceReviews);

                this.setState({
                    name: movie.name,
                    overview: movie.details,
                    cast: movie.cast,
                    genre: movie.genre,
                    wantToSee: response.data.isWantToSee,
                    notInterested: response.data.isNotInterested,
                    reviews: movie.reviews,
                    lindenMeter: movie.lindenMeter,
                    audienceReviews : audienceReviews,
                    criticsReviews: criticsReviews,
                    myReview: myReview

                });
            }.bind(this));
    }

    handlePostReview() {
        const cookies = new Cookies();
        let id = this.props.match.params.id;
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.post('http://localhost:8080/user/postReview', {
            token: token,
            contentId: id,
            contentType: "MOVIE",
            rating: 1,
            details: details
        })
            .then(function (response) {
                response = response.data;
                if (response.status === 'ERROR') {
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    addToWantToSee() {
        const cookies = new Cookies();
        if (!cookies.get('obj')) {
            toast.error('Please Log In!', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (!this.state.wantToSee) {
            const token = cookies.get('obj').token;
            let id = this.props.match.params.id;
            let app = this;
            axios.post('http://localhost:8080/user/addToWantToSee', {
                token: token,
                obj: {
                    id: id,
                    contentType: "MOVIE"
                }
            })
                .then(function (response) {
                    console.log(response);
                    if (response.data.status === 'OK') {
                        let curState = app.state;
                        curState.notInterested = curState.wantToSee;
                        curState.wantToSee = !curState.wantToSee;
                        app.setState(curState);
                        toast.success('Added!', {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                })
                .catch(function (error) {
                    console.log('ERROR ' + error);
                });
        }
    }

    addToNotInterested() {
        const cookies = new Cookies();
        if (!cookies.get('obj')) {
            toast.error('Please Log In!', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if (!this.state.notInterested) {
            const token = (cookies.get('obj')) ? cookies.get('obj').token : null;
            let id = this.props.match.params.id;
            let app = this;
            axios.post('http://localhost:8080/user/addToNotInterested', {
                token: token,
                obj: {
                    id: id,
                    contentType: "MOVIE"
                }
            })
                .then(function (response) {
                    if (response.data.status === 'OK') {
                        let curState = app.state;
                        curState.wantToSee = curState.notInterested;
                        curState.notInterested = !curState.notInterested;
                        app.setState(curState);
                        toast.success('Added!', {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                })
                .catch(function (error) {
                    console.log('ERROR ' + error);
                });
        }
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
                                    </List.Item>
                                    <List.Item>
                                        <Menu inverted borderless>
                                            <Menu.Item>
                                                <Image circular
                                                    src={require("../images/Fall.png")}
                                                    style={{ width: 70, verticalAlign: 'bottom' }}
                                                />
                                            </Menu.Item>
                                            <Menu.Item position='right'>
                                                <Button.Group>
                                                    <Button icon labelPosition='left'
                                                        toggle
                                                        active={this.state.wantToSee}
                                                        onClick={(e, data) => this.addToWantToSee()}>
                                                        <Icon name='bookmark' />
                                                        Want To See
                                                    </Button>
                                                    <Button.Or />
                                                    <Button icon labelPosition='left'
                                                        toggle
                                                        negative={this.state.notInterested}
                                                        onClick={(e, data) => this.addToNotInterested()}>
                                                        <Icon name='hide' />
                                                        Not Interested
                                                        </Button>
                                                </Button.Group>
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
                                            <Circle percent={this.state.lindenMeter} strokeWidth="10"
                                                strokeColor="white"
                                                prefixCls='0'
                                                strokeLinecap="butt"
                                                style={{ width: '150', height: '150' }} />
                                            <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                            {this.state.lindenMeter} %</Header>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                                AUDIENCE SCORE
                                        </Header>
                                            <Circle percent="98" strokeWidth="10"
                                                strokeColor="white"
                                                prefixCls='1'
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
                                                                <Form.TextArea onChange={(e, data) => details = data.value} />
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

                                        <CastCard casts={this.state.cast} />

                                    </List>
                                </List.Item>
                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> Reviews</Divider>
                                    <Tab menu={{ secondary: true, pointing: true, inverted: true }}  
                                    panes = {[
                                        { menuItem: 'All Critics', render: () => <Tab.Pane attached={false}><List horizontal><ReviewCard reviews={this.state.reviews}/></List></Tab.Pane> },
                                        { menuItem: 'Top Critics', render: () => <Tab.Pane attached={false}><List horizontal><ReviewCard reviews={this.state.criticsReviews}/></List></Tab.Pane> },
                                        { menuItem: 'Audience', render: () => <Tab.Pane attached={false}><List horizontal><ReviewCard reviews={this.state.audienceReviews}/></List></Tab.Pane> },
                                        { menuItem: 'My Review', render: () => <Tab.Pane attached={false}><List horizontal><ReviewCard reviews={this.state.myReview}/></List></Tab.Pane> },
                                    ]} />
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

export default withRouter(MovieDetails);
