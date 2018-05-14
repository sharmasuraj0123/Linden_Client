import React, { Component } from 'react';
import { Rating, Card, Item, Label, Divider } from 'semantic-ui-react';
import Genres from '../Genres';
import Cast from '../Cast';
import { withRouter, Link } from 'react-router-dom';

const ItemStyle = {
    padding: '10px'
};

class ReviewCard extends Component {
    render() {
        return (
            this.props.reviews.map((review) =>
                <Card fluid key={review.contentId}>
                    <Item.Group>
                        <Item style={ItemStyle}>
                            <Item.Image src={review.imageURL} />
                            <Item.Content>
                                <Link to={'/' + review.contentType + '/' + review.contentId}>
                                    <Item.Header as='h1'>
                                        {review.contentName}
                                    </Item.Header>
                                </Link>
                                <Item.Description>
                                    <Rating defaultRating={review.rating} maxRating={5} disabled />
                                    <Item.Meta as='h3'>
                                        {review.details}
                                    </Item.Meta>
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Card>
            )
        );
    }
}

export default withRouter(ReviewCard);
