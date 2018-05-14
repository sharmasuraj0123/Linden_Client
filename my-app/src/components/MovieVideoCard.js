import React, { Component } from 'react';
import  { List,Embed} from 'semantic-ui-react';
import DeleteReviewModal from '../components/DeleteReviewModal';
import EditReviewModal from '../components/EditReviewModal';




class MovieVideoCard extends Component {
    render() {
        return (   
            this.props.videos.map((video) =>
            <List.Item>
                <Embed  style={{ width: 280, verticalAlign: 'bottom' }}
                                            id={video}
                                            
                                            source='youtube'
                />
            </List.Item>
)   
            
        );
    }
}




export default MovieVideoCard;