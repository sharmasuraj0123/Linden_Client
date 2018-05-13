import React, { Component } from 'react';
import { Divider, List, Grid, } from 'semantic-ui-react';
import ProfileCard from '../components/ProfileCard';
import ReviewCard from '../components/ReviewCard';

class LindenCritics extends Component {
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
                            <ReviewCard/>
                    </Grid.Column>
                    <Grid.Column>
                        <Divider inverted horizontal style={{ fontSize: '2.5em' }}> TV SHOWS</Divider>
                            <ReviewCard/>
                    </Grid.Column>
                </Grid>


              
                
            </div>
        )
    }
}

export default LindenCritics;