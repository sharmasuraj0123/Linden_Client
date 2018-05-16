import React, { Component } from 'react';
import { Card, Item, } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';

const ItemStyle = {
    padding: '10px'
};

class ContentCard extends Component {
    render() {
        return (
            this.props.actors.map((actor) =>
                <Card fluid key={actor.id}>
                    <Item.Group>
                        <Item style={ItemStyle}>
                            <Item.Image src={actor.imageURL} />
                            <Item.Content>
                                <Link to={'/cast/' + actor.id}>
                                    <Item.Header as='h1'>
                                        {actor.firstName + ' ' + actor.lastName}
                                    </Item.Header>
                                </Link>
                                <Item.Description>Details</Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Card>
            )
        );
    }
}

export default withRouter(ContentCard);
