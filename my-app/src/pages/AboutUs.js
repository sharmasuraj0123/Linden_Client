import React, { Component } from 'react';
import { Header, Divider, List, Image } from 'semantic-ui-react';

import DescriptionCard from "../components/DescriptionCard";

class AboutUs extends Component {
    render() {
        return(
        <div style={{ paddingTop:'1em' }}>
            <Divider inverted horizontal style={{ fontSize:'2.5em'}}> ABOUT LINDEN ®</Divider>
            <p style={{ fontSize:'16px'}}>
            Linden and the Lindometer score are the most trusted recommendation sources for quality entertainment. 
            We offers the most comprehensive guide to what's Pleasent. 
            The Lindometer score represents the percentage of positive professional reviews for films and TV shows. 
            Linden designates the best-reviewed movies and TV shows as Certified Fall. 
            That accolade is awarded with a Lindometer score of 75% and higher and a required minimum number of reviews.
            </p>

            <Divider inverted horizontal style={{ fontSize:'2.5em'}}> LindoMeter</Divider>
            <p style={{ fontSize:'16px'}}>
                Since Linden is a tree which looks the best during Fall and not so good during winter.
                The Lindometer score also has a season attached to it. Fall signifies satisfaction and winter as not good.
            </p>
            <p style={{ fontSize:'16px'}}>
            The Lindometer score represents the percentage of professional critic reviews that are positive for a given film or television show. 
            A Lindometer score is calculated for a movie or TV show after it receives at least five reviews
            </p>
            <List horizontal>
                <List.Item>
                    <DescriptionCard imagesrc = {require('../images/Winter.png')} verticalAlign= 'top'/>
                </List.Item>
                <List.Item>
                    <DescriptionCard imagesrc = {require('../images/Fall.png')} verticalAlign= 'top'/>
                </List.Item>
            </List>
            
            
            <Divider  inverted horizontal style={{ fontSize:'2.5em'}}> Verfied Summer</Divider>
            <Divider inverted horizontal style={{ fontSize:'2.5em'}}> Score</Divider>
            <Divider inverted horizontal style={{ fontSize:'2.5em'}}> Audience Score</Divider>

        </div>
        )
    }
}

export default AboutUs;