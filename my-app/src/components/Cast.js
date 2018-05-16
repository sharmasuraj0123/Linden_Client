import React, { Component } from 'react';
import { Label } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class Cast extends Component {
    render() {    
        return (
            this.props.cast.map((actor) =>
                <Label 
                onClick={(e, data) =>  {
                    this.props.history.push('/cast/'+actor.id);
                    window.location.reload();
                }} 
                as='a' 
                key={actor.id} 
                color='teal' 
                basic> 
                {actor.firstName + ' ' + actor.lastName} 
                </Label>
            )
        );
    }
}

export default withRouter(Cast);
