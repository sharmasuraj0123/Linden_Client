import React, { Component } from 'react';
import Movies from './Movies';
import TvShows from "./TvShows";
import { Header, Grid, Input, Menu, Segment } from 'semantic-ui-react';
import './App.css';


const marginStyle = {
  'margin': 20
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{
        title: "Kumki",
        rating: 4,
        imageUrl: require("./images/kumki.jpeg")
      },
      {
        title: "MS Dhoni",
        rating: 5,
        imageUrl: require("./images/dhoni.jpeg")
      },
      {
        title: "Thar Ragnorak",
        rating: 2,
        imageUrl: require("./images/thor.jpg")
      },
      {
        title: "Arjun Reddy",
        rating: 5,
        imageUrl: require("./images/Reddy.jpeg")
      },
      {
        title: "Orient Express",
        rating: 1,
        imageUrl: require("./images/murder.jpeg")
      },
      {
        title: "Rush",
        rating: 5,
        imageUrl: require("./images/rush.jpeg")
      },
      {
        title: "Interstellar",
        rating: 5,
        imageUrl: require("./images/interstellar.jpeg")
      },
      ],
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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  render() {
    return (
      <div className="App">
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
              <Segment block attached>
                <Grid>
                  <Grid.Row columns={7}>
                    <Movies className='Movies' movies={this.state.movies} />
                  </Grid.Row>
                </Grid>
              </Segment>
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
