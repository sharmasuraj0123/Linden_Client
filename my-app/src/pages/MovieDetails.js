import React, { Component } from 'react'
import { Circle } from 'rc-progress';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// eslint-diasble-next-line
import { Divider, Icon, Tab, Table, Grid, Button, Header, Image, List, Menu, Segment, Embed } from 'semantic-ui-react'
import SideBarList from "../components/SideBarList";
import ReviewCard from "../components/ReviewCard";
import MyReview from "../components/MyReview";
import CastCard from "../components/CastCard";
import MovieImages from "../components/MovieImages";
import MovieVideoCard from "../components/MovieVideoCard";
import EditMovieModal from "../components/EditMovieModal";
import AddMovieModal from "../components/AddMovieModal";
import DeleteMovieModal from "../components/DeleteMovieModal";
import PostAReview from "../components/PostAReview";
import Genre from "../components/Genres";
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';

let ReviewField = null;
let lindoIcon = null;
let adminButton = null;

class MovieDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genre: [],
            cast: [],
            wantToSee: null,
            notInterested: null,
            audienceReviews: [],
            criticsReviews: [],
            myReview: [],
            reviews: [],
            lindenMeter: 0,
            score:0,
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
                let myReview = [];
                let contentType = movie.contentType;
                let allReviews = (movie.reviews) ? (movie.reviews) : ([]);
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

                ReviewField = myReview[0] ? (<MyReview reviews={myReview} />) : (<PostAReview contentType ={movie.contentType} id={this.props.match.params.id} />);
                lindoIcon = (movie.lindenMeter >= 75) ? (require("../images/Fall.png")) : (require("../images/Winter.png"));
                adminButton = (cookies.get('obj')) ?
                    ((cookies.get('obj').email === 'admin@gmail.com') ? (<List><DeleteMovieModal id={this.props.match.params.id}/></List>) : (null)) : (null);

                this.setState({
                    name: movie.name,
                    overview: movie.details,
                    cast: movie.cast,
                    genre: movie.genre,
                    wantToSee: response.data.isWantToSee,
                    notInterested: response.data.isNotInterested,
                    reviews: movie.reviews,
                    lindenMeter: movie.lindenMeter,
                    score: movie.score,
                    trailer: movie.videos[0],
                    videos: movie.videos,
                    audienceReviews: audienceReviews,
                    criticsReviews: criticsReviews,
                    myReview: myReview,
                    poster: movie.poster,
                    duration: movie.duration,
                    boxOffice: movie.boxOffice.toLocaleString(),
                    photos: movie.photos,
                    releaseDate: movie.releaseDate.toLocaleString()
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
                                        
                                    </List.Item>
                                    <List.Item>
                                        <Menu inverted borderless>
                                            <Menu.Item width={2}>
                                                <Image circular
                                                    src={lindoIcon}
                                                    style={{ width: 70, verticalAlign: 'bottom' }}
                                                />
                                            </Menu.Item>
                                            <Menu.Item width={10}>
                                            <Header as='h1' inverted style={{ fontSize: '33px', color: '#ffffff' }}>
                                            {this.state.name}
                                        </Header>    
                                            </Menu.Item>
                                           
                                        </Menu>
                                    </List.Item>
                                    <List.Item>
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
                                                <Divider/>
                                        <Embed
                                            id={this.state.trailer}
                                            placeholder={this.state.photos[0]}
                                            source='youtube'
                                        />
                                    </List.Item>
                                    <List.Item>
                                        <Grid>
                                            <Grid.Column width={6}>
                                            

                                                <Image bordered
                                                    src={this.state.poster}
                                                    style={{ width: 420, verticalAlign: 'bottom' }}
                                                />
                                                 
                                                 {adminButton}

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
                                                            <Table.Cell>{this.state.duration} mins</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell>Release Date:</Table.Cell>
                                                            <Table.Cell>{this.state.releaseDate}</Table.Cell>
                                                        </Table.Row>
                                                        <Table.Row>
                                                            <Table.Cell>Box Office Collection:</Table.Cell>
                                                            <Table.Cell>$ {this.state.boxOffice}</Table.Cell>
                                                        </Table.Row>
                                                    </Table.Body>
                                                </Table>
                                            </Grid.Column>
                                        </Grid>
                                    </List.Item>
                                </List.Item>
                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> Performance</Divider>
                                    <Grid textAlign={'center'} verticalAlign='bottom'>
                                        <Grid.Column width={4}>
                                            <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                                LINDOMETER
                                        </Header>
                                            <Circle percent={this.state.lindenMeter} strokeWidth="10"
                                                strokeColor="white"
                                                prefixCls='0'
                                                strokeLinecap="butt"
                                                style={{ width: '190', height: '190' }} />
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
                                                style={{ width: '190', height: '190' }} />
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
                                        <CastCard casts={this.state.cast} />
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
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> photos</Divider>
                                    <List horizontal>
                                        <MovieImages images={this.state.photos} />
                                    </List>
                                </List.Item>
                                <List.Item>
                                    <Divider inverted horizontal style={{ fontSize: '20px' }}> Videos</Divider>
                                    <List horizontal>
                                        <MovieVideoCard poster={this.state.poster} videos={this.state.videos} />
                                    </List>
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
