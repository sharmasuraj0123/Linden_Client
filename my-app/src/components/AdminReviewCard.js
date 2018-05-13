import React, { Component } from 'react';
import   { Grid,Card, Rating, List, Header } from 'semantic-ui-react';
import DeleteReviewModal from '../components/DeleteReviewModal';
import EditReviewModal from '../components/EditReviewModal';




class AdminReviewCard extends Component {
    render() {
        return (   
            this.props.reviews.map((review) =>
            <Card >
            <Grid colums>
            <Grid.Column width={8}> 
                <Header>Review </Header>
                    <Header>{review.postedBy.firstName} {review.postedBy.lastName} </Header>   
                    <Rating defaultRating={review.rating} maxRating={5} disabled />  
              
                <List.Content description={review.details} style={{ color: '#000' }}/>
                
                    
               
            </Grid.Column>
            <Grid.Column width={8}>      
            <Header>Reported By </Header>
                <Header>{review.postedBy.firstName} {review.postedBy.lastName} </Header>   
                 <List.Content description={review.details}  style={{ color: '#000' }}/>
                <div className='ui two buttons'>
                       <DeleteReviewModal review={review}/>
                    </div>
           
            </Grid.Column>

            </Grid>
            </Card>
)   
            
        );
    }
}




export default AdminReviewCard;