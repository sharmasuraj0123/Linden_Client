import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

class Genres extends Component {
    render() {
        let i = 0;
        return (
            this.props.genres.map((genre) =>
                <Label as='a' key={i++} color='teal' tag> {genre} </Label>
            )
        );
    }
}

export default Genres;
