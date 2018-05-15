import React, { Component } from 'react'
import { List, Header, Menu, Image } from 'semantic-ui-react'
import axios from 'axios';
import MovieList from '../components/MovieList';
import { withRouter, Link } from 'react-router-dom';

class SideBarList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			comingSoon: [],
			topBoxOffice: [],
			openingThisWeek: [],
			cast: []
		}
	}
	componentDidMount() {
		axios.get('http://localhost:8080/movie/getComingSoon')
			.then(function (response) {
				let movieList = response.data.movies;
				this.setState({
					comingSoon: movieList,
				});
			}.bind(this));

		axios.get('http://localhost:8080/movie/getTopBoxOffice')
			.then(function (response) {
				let movieList = response.data.movies;
				this.setState({
					topBoxOffice: movieList,
				});
			}.bind(this));

		axios.get('http://localhost:8080/movie/openingThisWeek')
			.then(function (response) {
				let movieList = response.data.movies;
				this.setState({
					openingThisWeek: movieList,
				});
			}.bind(this));
	}

	render() {
		return (
			<List>
				<List.Item>
					<Header as='h2' size='medium'>OPENING THIS WEEK</Header>
					<List.Item>
						<MovieList className='MovieList' movies={this.state.openingThisWeek} />
					</List.Item>
					<List.Item>
						<Link to='/openingThisWeek'>
							<Header as='a' floated={'right'} size='tiny'>See more >></Header>
						</Link>
					</List.Item>
				</List.Item>
				<List.Item>
					<Header as='h2' size='medium'>COMING SOON</Header>
					<List.Item>
						<MovieList className='MovieList' movies={this.state.comingSoon} />
					</List.Item>
					<List.Item>
						<Link to='/comingSoon'>
							<Header as='a' floated={'right'} size='tiny'>See more >></Header>
						</Link>
					</List.Item>
				</List.Item>
				<List.Item>
					<List divided relaxed>
						<Header as='h2' size='medium'>TOP BOX OFFICE</Header>
						{this.state.topBoxOffice.map((movie) =>
							<Menu key={movie.name} borderless>
								<Menu.Item>
									<Image circular
										src={(movie.lindenMeter >= 75) ? (require("../images/Fall.png")) : (require("../images/Winter.png"))}
										style={{ width: 25, verticalAlign: 'bottom' }}
									/>
								</Menu.Item>
								<Menu.Item>
									<Link to={'/' + movie.contentType + '/' + movie.id}>
										<Header size='small' >
											{movie.name}
										</Header>
									</Link>
								</Menu.Item>
								<Menu.Item position='right'>
									<Header size='small'>
										{'$ ' + movie.revenue}
									</Header>
								</Menu.Item>
							</Menu>
						)}
						<Link to='/topBoxOffice'>
							<Header as='a' floated={'right'} size='tiny'>See more >></Header>
						</Link>
					</List>
				</List.Item>
			</List>
		);
	}
}

export default withRouter(SideBarList);
