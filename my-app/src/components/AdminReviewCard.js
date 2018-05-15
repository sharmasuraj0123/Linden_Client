import React, { Component } from 'react';
import { Card, Rating, List, Button } from 'semantic-ui-react';
import DeleteReviewModal from '../components/DeleteReviewModal';

class AdminReviewCard extends Component {
    render() {
        return (
            this.props.reports.map((report) =>
                <Card>
                    <Card.Content>
                        <Card.Header href= {'user/' + report.review.postedBy.id}>
                            {report.review.postedBy.firstName} {report.review.postedBy.lastName}
                        </Card.Header>
                        <Card.Meta>
                            <Rating defaultRating={report.review.rating} maxRating={5} disabled />
                            <List.Content description={report.review.details} style={{ color: '#000' }} />
                        </Card.Meta>
                        <Card.Description href= {'user/' +report.reportedBy.id}>
                            <strong>Reported by: </strong>  {report.reportedBy.firstName} {report.reportedBy.lastName}
                        </Card.Description>
                        <Card.Description>
                            <strong>Reason: </strong>  {report.justification}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>Dismiss</Button>
                            <DeleteReviewModal review={report.review}/>
                        </div>
                    </Card.Content>
                </Card>

            )

        );
    }
}

export default AdminReviewCard;
