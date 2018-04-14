
import { Image, Reveal } from 'semantic-ui-react'
import { Rating, Grid, Card, Icon, Header, Divider} from 'semantic-ui-react';
import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            this.props.movies.map((movie) =>

            <Reveal animated='move right'>
            <Divider/>
            <Reveal.Content visible>
        <Image height='250' width='280' src={movie.imageURL} />

            </Reveal.Content>
            <Reveal.Content hidden>
        <Header as = 'h1' > {movie.name}</Header>

        <Icon name='Reviews'/>75 Reviews
        <Rating disabled={true} icon='star' defaultRating = {movie.rating} maxRating={movie.rating} />
            </Reveal.Content>
            </Reveal>

    )
    );
    }
}

export default Content