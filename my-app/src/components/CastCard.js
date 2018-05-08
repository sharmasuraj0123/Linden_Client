import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class CastCard extends Component {
    render() {
        console.log(this.props);
        return (
            this.props.casts.map((cast) =>
                <Card href={'/cast/' + cast.id} style={{ width: 150, verticalAlign: 'bottom' }}>
                    <Image src={require('../images/testActorImg.jpg')} style={{ height: 150 }} />
                    <Card.Content>
                        <Card.Header>
                            {cast.firstName + ' ' + cast.lastName}
                        </Card.Header>
                    </Card.Content>
                </Card>
            )
        );
    }
}

export default CastCard;