import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';

class CastCard extends Component {
    render() {
        return (
            <Card style={{ width: 150, verticalAlign: 'bottom' }}>
                <Image src={require("../images/testActorImg.jpg")} style={{ height: 150 }} />
                <Card.Content>
                    <Card.Header>
                        Robert Downey JR
                    </Card.Header>
                </Card.Content>
            </Card>
        )
    }
}

export default CastCard;