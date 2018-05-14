import React, { Component } from 'react';
import { Rating, Item, Card } from 'semantic-ui-react';
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
                            <Item.Image src={review.contentImage} />
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
