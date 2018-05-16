import React, { Component } from 'react';
import { List, Embed, Modal, Image } from 'semantic-ui-react';

class MovieVideoCard extends Component {
    render() {
        return (   
            this.props.videos.map((video) =>
            <List.Item>
                <Embed  style={{ width: 280, verticalAlign: 'bottom' }}
                                            id={video}
                                            placeholder = {this.props.poster}
                                            source='youtube'
                />
            </List.Item>
)   
            
        );
    }
}
export default MovieVideoCard;