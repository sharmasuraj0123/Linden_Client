import React, { Component } from 'react';
import { Card, Image, List } from 'semantic-ui-react';

class CastCard extends Component {
    render() {
        console.log(this.props);
        return (
            this.props.casts.map((cast) =>
                <List.Item>
                <Card href={'/cast/' + cast.id} style={{ width: 150, height: 230,verticalAlign: 'bottom' }}>
                    <Image src={require('../images/testActorImg.jpg')} style={{ height: 150 }} />
                    <Card.Content>
                        <Card.Header>
                            {cast.firstName + ' ' + cast.lastName}
                        </Card.Header>
                    </Card.Content>
                </Card>
                </List.Item>
            )
        );
    }
}

export default CastCard;