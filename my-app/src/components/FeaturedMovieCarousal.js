 import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
 import React, { Component } from 'react'

var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

class FeaturedMovieCarousal extends Component {
    render() {
        return (
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img src={require("../images/testMovieTrailer.jpg")} />
                    <p className="legend">Gandhi</p>
                </div>
                <div>
                    <img src={require("../images/featured.jpg")} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require("../images/featured2.jpg")} />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel>
        );
    }
}
export default FeaturedMovieCarousal;
