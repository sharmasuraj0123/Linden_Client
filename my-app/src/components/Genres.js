import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

class Genres extends Component {
    render() {
        let i = 0;
        return (
            this.props.genres.map((genre) =>
                <Label key={i++} color='teal' tag> {genre} </Label>
            )
        );
    }
}

export default Genres;
