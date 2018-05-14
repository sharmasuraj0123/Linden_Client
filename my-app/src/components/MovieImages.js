import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class MovieImages extends Component {
    render() {
        let i = 1;
        return (
            this.props.images.map((image) =>
                <List.Item key={i++}>
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