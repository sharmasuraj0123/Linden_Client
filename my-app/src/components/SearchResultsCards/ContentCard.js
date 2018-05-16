import React, { Component } from 'react';
import { Rating, Card, Item, Label, Divider,Image } from 'semantic-ui-react';
import Genres from '../Genres';
import Cast from '../Cast';
import { withRouter, Link } from 'react-router-dom';

const ItemStyle = {
  padding: '10px'
};

class ContentCard extends Component {
  render() {
    return (
      this.props.contents.map((content) =>
        <Card fluid key={content.id}>
          <Item.Group>
            <Item style={ItemStyle}>
              <Item.Image src={content.poster} />
              <Item.Content>
                <Link to={'/' + content.contentType + '/' + content.id}>
                  <Item.Header as='h1'>
                    {content.name}
                  </Item.Header>
                </Link>
                <Item.Meta>
                  <span className='cinema'>{content.year}</span>
                </Item.Meta>
                <Item.Description>{content.details}</Item.Description>
                <Item.Extra>
                <Image circular
										src={(content.lindenMeter >= 75) ? (require("../../images/Fall.png")) : (require("../../images/Winter.png"))}
										style={{ width: 25, verticalAlign: 'bottom' }}
									/>
                <Label>Lindometer : {content.lindenMeter} %</Label>
                  <Label>Audience Score : {content.score} %</Label>
                  
                </Item.Extra>
                <Divider />
                <Genres genres={content.genre} />
                <Divider />
                <Cast cast={content.cast} />
              </Item.Content>
            </Item>
          </Item.Group>
        </Card>
      )
    );
  }
}

export default withRouter(ContentCard);
