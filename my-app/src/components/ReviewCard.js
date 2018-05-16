import React, { Component } from 'react';
import { Label, Card, Rating, List } from 'semantic-ui-react';
import ReportModal from '../components/ReportModal';

class ReviewCard extends Component {
    render() {
        let i=1;
        return (
            this.props.reviews.map((review) =>
                <List.Item key={i++}>
                    <Card width={75}>
                        <Card.Content>
                            <Card.Header href= {'http://localhost:3000/user/'+review.postedBy.id}>{review.postedBy.firstName} {review.postedBy.lastName}
                                <Label>{review.reviewType}</Label>
                            </Card.Header>
                            <Card.Meta>
                                <Rating defaultRating={review.rating} maxRating={5} disabled />
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content>
                            <Card.Content description={review.details} />
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                                <ReportModal review={review} />
                            </div>
                        </Card.Content>
                    </Card>
                </List.Item>
            )
        );
    }
}

export default ReviewCard;
