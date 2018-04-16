import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';

class Cast extends Component {
    render() {
        return (
            this.props.cast.map((actor) =>
                <Label as='a' key={actor.id} color='teal' basic> {actor.firstName+' '+actor.lastName} </Label>
            )
        );
    }
}

export default Cast;
