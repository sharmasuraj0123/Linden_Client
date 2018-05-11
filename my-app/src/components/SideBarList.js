import React,{ Component } from 'react'
import { List,Header } from 'semantic-ui-react'
import axios from 'axios';
import MovieList from '../components/MovieList';

class SideBarList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [],
        cast: []
    }
}
  componentDidMount() {
    axios.get('http://localhost:8080/movie/getComingSoon')
        .then(function (response) {
            let movieList = response.data;
            
            this.setState({
              movies: movieList,
                
            });
            console.log(this.state.cast);
        }.bind(this));
}

    render() {
      return (
        <List>
          <List.Item>
            <List divided relaxed>
      <Header as='h2' size='medium'>Opening This Week</Header>
        <List.Item>
            <MovieList className='MovieList' movies={this.state.movies} />
        </List.Item>
        <List.Item>
          <Header as='a' floated={'right'} size='tiny'>See more >></Header>
        </List.Item>
      </List>
      </List.Item>

      <List.Item>
            <List divided relaxed>
      <Header as='h2' size='medium'>Coming Soon</Header>
        <List.Item>
          <List.Icon name='bookmark'  size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a' size='huge'>{this.props.data}</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <Header as='a' floated={'right'} size='tiny'>See more >></Header>
        </List.Item>
      </List>
      </List.Item>

      <List.Item>
            <List divided relaxed>
      <Header as='h2' size='medium'>{this.props.title}</Header>
        <List.Item>
          <List.Icon name='bookmark'  size='large' verticalAlign='middle' />
          <List.Content>
            <List.Header as='a' size='huge'>{this.props.data}</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <Header as='a' floated={'right'} size='tiny'>See more >></Header>
        </List.Item>
      </List>
      </List.Item>
  </List>
      );
    }
  }

















export default SideBarList