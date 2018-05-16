// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { Component } from 'react'
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';

var Carousel = require('react-responsive-carousel').Carousel;

class FeaturedMovieCarousal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/movie/featured')
            .then(function (response) {
                let data = response.data;
                this.setState({
                    movies: data.movies,
                });
            }.bind(this));
    }

    render() {
        return (
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                {this.state.movies.map((movie) =>
                    <div key={movie.id}>
                        <img src={movie.photos[0]} />
                        <Link to={'/movie/' + movie.id}>
                            <p style={{fontSize:'35px'}} className="legend">{movie.name}</p>
                        </Link>
                    </div>
                )}
            </Carousel>
        );
    }
}

export default withRouter(FeaturedMovieCarousal);
