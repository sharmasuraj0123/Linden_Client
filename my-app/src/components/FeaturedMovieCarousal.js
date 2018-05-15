// eslint-disable-next-line
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import React, { Component } from 'react'
import axios from 'axios';

var Carousel = require('react-responsive-carousel').Carousel;

class FeaturedMovieCarousal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
            movies: []
        }
    }

    componentDidMount() {
       
        axios.get('localhost:8080/movie/featured')
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
                
                    <div>
                        
                   </div>
                 )}
                </Carousel>
            );
        }
    }
    

export default FeaturedMovieCarousal;
