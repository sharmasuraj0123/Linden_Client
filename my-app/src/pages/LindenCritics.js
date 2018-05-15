import React, { Component } from 'react';
import { Divider, List, Grid, } from 'semantic-ui-react';
import ProfileCard from '../components/ProfileCard';
import ReviewCard from '../components/ReviewCard';
import axios from 'axios';

class LindenCritics extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reviews: []
            
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/user/getAllCritics')
            .then(function (response) {
                let movieList = response.data.movies;
                this.setState({
                    comingSoon: movieList,
                });
            }.bind(this));
        axios.get('http://localhost:8080/user/getLatestReviews')
            .then(function (response) {
                let reviews = response.data;
                this.setState({
                    reviews : reviews
                });
            }.bind(this));
    }

    render() {

        return (
            <div style={{ paddingTop: '1em' }}>
                <Divider inverted horizontal style={{ fontSize: '2.5em' }}> SPOT LIGHT </Divider>
                <List horizontal>
                <List.Item>
                    <ProfileCard/>
                </List.Item>
                <List.Item>
                    <ProfileCard/>
                </List.Item>
                <List.Item>
                    <ProfileCard/>
                </List.Item>
                </List>
                <Divider inverted horizontal style={{ fontSize: '2.5em' }}> Latest Reviews</Divider>
                <Grid columns='equal'>
                    <Grid.Column>
                        <Divider inverted horizontal style={{ fontSize: '2.5em' }}> Movies</Divider>
                        <ReviewCard reviews={this.state.reviews}/> 
                    </Grid.Column>
                    <Grid.Column>
                       <Divider inverted horizontal style={{ fontSize: '2.5em' }}> TV SHOWS</Divider>      
                    </Grid.Column>
                </Grid>   
            </div>
        )
    }
}

export default LindenCritics;