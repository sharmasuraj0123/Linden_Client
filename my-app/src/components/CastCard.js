import React, { Component } from 'react';
import { Card, Image, List } from 'semantic-ui-react';

class CastCard extends Component {
    render() {
        return (
            this.props.casts.map((cast) =>
                <List.Item key={cast.id}>
                <Card href={'/cast/' + cast.id} style={{ width: 200, height: 250,verticalAlign: 'bottom' }}>
                    <Image src={cast.imageURL} style={{ height: 200 }} />
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