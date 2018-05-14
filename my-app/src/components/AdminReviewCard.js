import React, { Component } from 'react';
import { Card, Rating, List, Button } from 'semantic-ui-react';
import DeleteReviewModal from '../components/DeleteReviewModal';

class AdminReviewCard extends Component {
    render() {
        return (
            this.props.reviews.map((review) =>
                <Card>
                    <Card.Content>
                        <Card.Header>
                            {review.postedBy.firstName} {review.postedBy.lastName}
                        </Card.Header>
                        <Card.Meta>
                            <Rating defaultRating={review.rating} maxRating={5} disabled />
                            <List.Content description={review.details} style={{ color: '#000' }} />
                        </Card.Meta>
                        <Card.Description>
                            <strong>Reported by: </strong>  {review.postedBy.firstName} {review.postedBy.lastName}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>Dismiss</Button>
                            <DeleteReviewModal review={review} />
                        </div>
                    </Card.Content>
                </Card>

            )

        );
    }
}

export default AdminReviewCard;
