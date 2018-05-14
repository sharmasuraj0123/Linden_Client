import React, { Component } from 'react';
import  { List,Image} from 'semantic-ui-react';





class MovieImages extends Component {
    render() {
        return (   
            this.props.images.map((image) =>
            <List.Item>
                  <Image bordered
                        src={image}
                        style={{ width: 280, verticalAlign: 'bottom' }}
                />
            </List.Item>
)   
            
        );
    }
}




export default MovieImages;