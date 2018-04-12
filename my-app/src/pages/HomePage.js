import React, { Component } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';
import CardBox from '../components/CardBox';
import ContentList from '../components/ContentList'

const marginStyle = {
  'margin': 20
};

class HomePage extends Component {
  render() {
    return (
      <div style={marginStyle} className="App" >
        <Header as='h2' block attached='top'>Featured Movies</Header>
        <CardBox className='Movies' movies={this.props.movies} />
        <br></br>
        <Grid columns='equal'>
          <Grid.Column>
            <Segment>
              <Header as='h3'>Opening this week</Header>
            </Segment>
            <ContentList movies={this.props.movies} />
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <Header as='h3'>Top Box Office</Header>
            </Segment>
            <ContentList movies={this.props.movies} />
          </Grid.Column>
        </Grid>
      </div >
    );
  }
}

export default HomePage;
