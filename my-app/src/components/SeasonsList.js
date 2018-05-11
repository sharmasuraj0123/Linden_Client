import React, { Component } from 'react';
import { Rating, List, Item, Label, Divider } from 'semantic-ui-react';
import Genres from './Genres';
import Cast from './Cast';

const ItemStyle = {
  padding: '10px'
};



class SeasonsList extends Component {
  render() {
    
    return (
        
      this.props.seasons.map((season) =>
        
            <List.Item>
                <Item.Header href={ this.props.id + '/season/' + season.seasonNumber}>
                  {season.seasonNumber}
                </Item.Header>
            </List.Item>
      )
    );
  }
}

export default SeasonsList;