import React, { Component, View } from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Sidebar, Pagination,Feed } from 'semantic-ui-react'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Movies from '../components/Movies';
import Content from '../components/Content';
import MenuExampleVertical from '../components/MenuExampleVertical';
import ModalBasicExample from '../components/ModalBasicExample';
import axios from 'axios';
import StepExampleLinkClickable from "../components/StepExampleLinkClickable";
import FeaturedCard from "../components/FeaturedCard";
import DescriptionCard from "../components/DescriptionCard";
import SideBarList from "../components/SideBarList";



const SegmentStyle = {
    flex: 1,
    marginLeft: "3em",
    marginRight: "3em",

};

const src = require('../images/Logo.png')


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            tvShows: [{
                title: "Prison Break",
                rating: 4,
                imageUrl: require("../images/prison_break.jpg")
            },
            {
                title: "Pitchers",
                rating: 5,
                imageUrl: require("../images/pitcher.png")
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
                    element.imageURL = require("../images/Logo.png");
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
                <Grid columns divided style={{paddingTop:'2em'}}>
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
                   
                    <List horizontal>
                                <List.Item>
                                <DescriptionCard/>
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

                    <Image.Group size='small' divided>
                        <Image src={require('../images/new1.png')} style={{ width: 150,height: 150 }} />
                        <Image src={require('../images/new2.png')} style={{ width: 150,height: 150 }}/>
                        <Image src={require('../images/new3.png')} style={{ width: 150,height: 150 }}/>
                        <Image src={require('../images/new4.png')} style={{ width: 150,height: 150 }}/>
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
  





  </Grid.Column>
                    <Grid.Column width={5}>
                        <Segment raised >
                       <SideBarList title='Opening This week'/>
                        </Segment>
                        <Segment raised >
                       <SideBarList title='Coming Soon'/>
                        </Segment>
                        <Segment raised >
                       <SideBarList title='Critic Picks'/>
                        </Segment>
                    </Grid.Column>


                </Grid>
                <Footer />
            </Segment>



        );
    }
}

export default Home;
