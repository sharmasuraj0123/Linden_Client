import React, { Component, View } from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Sidebar, Pagination,Feed } from 'semantic-ui-react'
import NavBar from "./NavBar";
import Footer from "./Footer";
import Movies from './Movies';
import Content from './Content';
import MenuExampleVertical from './MenuExampleVertical';
import ModalBasicExample from './ModalBasicExample';
import axios from 'axios';
import StepExampleLinkClickable from "./StepExampleLinkClickable";
import FeaturedCard from "./FeaturedCard";
import DescriptionCard from "./DescriptionCard";
import './App.css';


const SegmentStyle = {
    flex: 1,
    marginLeft: "3em",
    marginRight: "3em",

};

const src = require('./images/Logo.png')


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            tvShows: [{
                title: "Prison Break",
                rating: 4,
                imageUrl: require("./images/prison_break.jpg")
            },
            {
                title: "Pitchers",
                rating: 5,
                imageUrl: require("./images/pitcher.png")
            }
            ],
            activeItem: 'movie'
        };
    }


    componentDidMount() {
        console.log("ds");
        axios.get('http://localhost:8080/search?keywords=the&page=1')
            .then(function (response) {
                console.log(response);
                let movieList = response.data.movies;
                let listLength = 0;
                movieList.forEach(function (element) {
                    element.imageURL = require("./images/Logo.png");
                    listLength++;
                });
                this.setState({
                    movies: movieList,
                    numberOfmovies: listLength
                });
            }.bind(this));
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name });




    render() {
        return (

            <Segment raised style={SegmentStyle}>
                < NavBar />
                <Grid columns>
                    <Grid.Column width={10}>
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
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Segment raised >
                            <List horizontal>
                                <List.Item>
                                    <Header as='h3' size='mini'>Movies In Theater</Header>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Opening This Week</List.Header>
                                        </List.Content>
                                        <List.Content>
                                            <List.Header as='a'>Top Box Office</List.Header>
                                        </List.Content>
                                        <List.Content>
                                            <List.Header as='a'>Coming Soon</List.Header>
                                        </List.Content>
                                        <List.Content>
                                            <List.Header as='a'>Fresh</List.Header>
                                        </List.Content>
                                        <List.Content>
                                            <List.Header as='a'>Featured</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List.Item>
                                <List.Item>

                                    <Header as='h3' size='mini'>Top Performers</Header>

                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Top Rated</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Critically Acclaimed</List.Header>
                                        </List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content>
                                            <List.Header as='a'>Trending Now</List.Header>
                                        </List.Content>
                                    </List.Item>
                                </List.Item>
                            </List>
                        </Segment>
                    </Grid.Column>
                    <Divider horizontal>Certified Summer Collection</Divider>
                    <DescriptionCard/>
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
                                <List.Item>
                                    <FeaturedCard />
                                </List.Item>
                              

                            </List>
                    <Divider horizontal>News and features</Divider>

                    <Image.Group size='small'>
                        <Image src={src} />
                        <Image src={src} />
                        <Image src={src} />
                        <Image src={src} />
                    </Image.Group>
                    <Divider horizontal>Headlines Today</Divider>
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
  
                </Grid>
                <Footer />
            </Segment>



        );
    }
}

export default Home;
