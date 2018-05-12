import React, { Component } from 'react';
import { List, Item } from 'semantic-ui-react';

class SeasonsList extends Component {
  render() {
    return (
      this.props.seasons.map((season) =>
        <List.Item>
          <Item.Header href={this.props.id + '/season/' + season.seasonNumber}>
            {season.seasonNumber}
          </Item.Header>
        </List.Item>
      )
    );
  }
}

export default SeasonsList;
