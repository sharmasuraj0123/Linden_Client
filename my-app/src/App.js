import React, { Component } from 'react';
import axios from 'axios';
import Movies from './Movies';
import TvShows from "./TvShows";
import { List, Header, Grid, Input, Menu, Segment } from 'semantic-ui-react';
import './App.css';


const marginStyle = {
  'margin': 20
};

class App extends Component {
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
    axios.get('http://localhost:8080/movies/featured')
      .then(function (response) {
        let movieList = response.data.data;
        movieList.forEach(function (element) {
          element.imageURL = require("" + element.imageURL);
        });
        this.setState({
          movies: movieList
        });
      }.bind(this));
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    return (
      <div className="App" >
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item name='movie' active={this.state.activeItem === 'movie'} onClick={this.handleItemClick} />
            <Menu.Item name='tvShow' active={this.state.activeItem === 'tvShow'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input className='icon' icon='search' placeholder='Search...' />
              </Menu.Item>
            </Menu.Menu>
          </Menu>

        </Segment>

        {
          this.state.activeItem === 'movie' &&
          (
            <div style={marginStyle}>
              <Header as='h2' block attached='top'>Featured Movies</Header>
              <Segment attached>
                <Grid>
                  <Grid.Row columns={7}>
                    <Movies className='Movies' movies={this.state.movies} />
                  </Grid.Row>
                </Grid>
              </Segment>
              <hr></hr>
              <br></br>
              <hr></hr>
              <Grid columns='equal'>
                <Grid.Column>
                  <Segment>
                    <Header as='h3'>Opening this week</Header>
                  </Segment>
                  <List divided relaxed>

                    {this.state.movies.map((movie) =>
                      <List.Item>
                        <List.Content floated='right'>
                          <List.Header>MAR 9</List.Header>
                        </List.Content>
                        <List.Icon name='tree' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>{movie.name}</List.Header>
                        </List.Content>
                      </List.Item>
                    )}
                    
                  </List>
                </Grid.Column>

                <Grid.Column>
                  <Segment>
                    <Header as='h3'>Top Box Office</Header>
                  </Segment>
                  <List divided relaxed>
                    
                    {this.state.movies.map((movie) =>
                      <List.Item>
                        <List.Content floated='right'>
                          <List.Header>$65 M</List.Header>
                        </List.Content>
                        <List.Icon name='tree' size='large' verticalAlign='middle' />
                        <List.Content>
                          <List.Header as='a'>{movie.name}</List.Header>
                        </List.Content>
                      </List.Item>
                    )}

                  </List>
                </Grid.Column>
              </Grid>
            </div>
          )
        }
        {
          this.state.activeItem === 'tvShow' && (
            <TvShows tvShows={this.state.tvShows} />)
        }
      </div >
    );
  }
}

export default App;
