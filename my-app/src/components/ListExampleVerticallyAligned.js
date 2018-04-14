import React from 'react'
import { Image, List, Header, Button } from 'semantic-ui-react'

const ListExampleVerticallyAligned = () => (
  <div>

    <List horizontal>
      <List.Item>
        <List.Content verticalAlign='top'>
          <Header as='h3' size='large'>Movies In Theaters</Header>
          <List>
            <List.Item>
              <List.Content>
                <List.Header as='a'>Opening This Week</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content verticalAlign='middle'>
          <Header as='h3' size='large'>Movies In Theaters</Header>
          <List>
            <List.Item>
              <List.Content>
                <List.Header as='a'>Opening This Week</List.Header>
              </List.Content>
            </List.Item>
          </List>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content verticalAlign='bottom'>
          Bottom
      </List.Content>
      </List.Item>
    </List>
  </div>
)

export default ListExampleVerticallyAligned;