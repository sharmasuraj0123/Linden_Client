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
import PostAReview from "../components/PostAReview";
import { toast } from 'react-toastify';
import MyReview from "../components/MyReview";
import EditMovieModal from "../components/EditMovieModal";
import DeleteMovieModal from "../components/DeleteMovieModal";

import Cookies from 'universal-cookie';


let details = ' '
let ReviewField = null;
let lindoIcon = null;
let adminButton = null;

class TvShowDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: [],
            cast: [],
            seasons:[],
            wantToSee: null,
            notInterested: null,
            audienceReviews: [],
            criticsReviews: [],
            myReview: [],
            reviews: [],
            lindenMeter: 0,
            score: 0,
            releaseDate: 0,
            photos: [],
            videos: []
        }
    }



    componentDidMount() {
        const cookies = new Cookies();
        let id = this.props.match.params.id;
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        let email = (cookies.get('obj')) ? cookies.get('obj').email : null;

        axios.get('http://localhost:8080/tvShow/' + id,
            {
                headers: {
                    token: token
                }
            })
            .then(function (response) {
                let tvShow = response.data.tvShow;
                console.log(tvShow);
                let audienceReviews = [];
                let criticsReviews = [];
                let myReview = [];
                
                let contentType = tvShow.contentType;
                let allReviews = (tvShow.reviews) ? (tvShow.reviews) : ([]);
                allReviews.forEach((review) => {
                    if (review.postedBy.email === email) {
                        myReview.push(review);
                    }
                    else if (review.reviewType === 'AUDIENCE') {
                        audienceReviews.push(review);
                    } else if (review.reviewType === 'CRITIC') {
                        criticsReviews.push(review);
                    }
                })

                ReviewField = myReview[0] ? (<MyReview reviews={myReview} />) : (<PostAReview contentType ={tvShow.contentType} id={this.props.match.params.id} />);
                lindoIcon = (tvShow.lindenMeter >= 75) ? (require("../images/Fall.png")) : (require("../images/Winter.png"));
                adminButton = (cookies.get('obj')) ?
                    ((cookies.get('obj').email === 'admin@gmail.com') ? (<List><EditMovieModal /><DeleteMovieModal contentType ={tvShow.contentType} id={this.props.match.params.id}/></List>) : (null)) : (null);

                this.setState({
                    name: tvShow.name,
                    overview: tvShow.details,
                    cast: tvShow.cast,
                    genre: tvShow.genre,
                    seasons: tvShow.seasons,
                    wantToSee: response.data.isWantToSee,
                    notInterested: response.data.isNotInterested,
                    reviews: tvShow.reviews,
                    lindenMeter: tvShow.lindenMeter,
                    score: tvShow.score,
                    trailer: tvShow.videos[0],
                    videos: tvShow.videos,
                    audienceReviews: audienceReviews,
                    criticsReviews: criticsReviews,
                    myReview: myReview,
                    poster: tvShow.poster,
                    duration: tvShow.duration,
                    boxOffice: tvShow.boxOffice.toLocaleString(),
                    photos: tvShow.photos,
                    releaseDate: tvShow.releaseDate.toLocaleString()
                });
            }.bind(this));
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
                    contentType: "TVSHOW"
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
                    contentType: "TVSHOW"
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
                                   
                                    </List.Item >
                                    <List.Item >
                                        <Menu inverted borderless>
                                            <Menu.Item width={2}>
                                                <Image circular
                                                    src={lindoIcon}
                                                    style={{ width: 70, verticalAlign: 'bottom' }}
                                                />
                                            </Menu.Item>
                                            <Menu.Item width={10}>
                                            <Header as='h6' inverted style={{ fontSize: '2.5em', color: '#ffffff', }}>
                                                    {this.state.name}
                                                </Header>
                                            </Menu.Item>
                                            
                                            <Menu.Item width={4} position='right'>
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
                                        <Grid>
                                            <Grid.Column width={5}>
                                                <Image bordered
                                                    src= {this.state.poster}
                                                    style={{ width: 280, verticalAlign: 'bottom' }}
                                                />
                                                <Menu.Item>
                                                {adminButton}
                                            </Menu.Item>
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
                                                                <Genre genres={this.state.genre} />
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
                                            <Circle percent={this.state.score} strokeWidth="10"
                                                strokeColor="white"
                                                prefixCls='1'
                                                strokeLinecap="butt"
                                                style={{ width: '150', height: '150' }} />
                                            <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                            {this.state.score} %</Header>
                                        </Grid.Column>
                                        <Grid.Column width={8}>

                                            {ReviewField}

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
                                    <Tab menu={{ secondary: true, pointing: true, inverted: true }}
                                        panes={[
                                            { menuItem: 'All', render: () => <Tab.Pane attached={false}><List horizontal><ReviewCard reviews={this.state.reviews} /></List></Tab.Pane> },
                                            { menuItem: 'Critics', render: () => <Tab.Pane attached={false}><List horizontal><ReviewCard reviews={this.state.criticsReviews} /></List></Tab.Pane> },
                                            { menuItem: 'Audience', render: () => <Tab.Pane attached={false}><List horizontal><ReviewCard reviews={this.state.audienceReviews} /></List></Tab.Pane> },
                                        ]} />
                                </List.Item>
                                <List.Item>
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
