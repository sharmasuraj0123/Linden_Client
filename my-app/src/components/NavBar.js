import React, { Component } from 'react'
import { Menu, Segment, Dropdown, Image, Header, List, Grid, Button } from 'semantic-ui-react'
import NavbarModals from './NavbarModals';
import FeaturedCard from './FeaturedCard';
import SearchInput from './SearchInput';

class NavBar extends Component {
  render() {
    return (
      <div >
        <Menu top={'true'} inverted >
          <Menu.Item>
            <Image
              src={require('../images/LogoNew.png')}
              style={{ width: 120, height: 100, verticalAlign:'top' }}
              as='a'
              href='/'
            />
          </Menu.Item>
          <Menu.Item >
            <div>
              <div >
                <Button size='big' circular color='blue' inverted icon='facebook' />
                <Button size='big' circular color='black' icon='instagram' />
                <Button size='big' circular color='black' icon='google plus' />
                <Button size='big' circular color='black' icon='youtube play' />
                <Button size='big' circular color='black' icon='pinterest' />
                <Button size='big' circular color='black' icon='twitter' />
                <Button size='big' circular color='black' icon='tumblr' />
              </div>
              <Menu inverted style={{ fontSize:'19px', verticalAlign: 'bottom'}}>
                <Dropdown item simple text='Movies' >
                  <Dropdown.Menu fluid={'true'} selection={'true'}>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item simple text='TV Shows'>
                  <Dropdown.Menu style={{ fontSize:'12px', width:550, height: 350}}>
                    <Dropdown.Item fluid={'true'}>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>List Item</Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item simple text='News'>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                      <i className='dropdown icon' />
                      <span className='text'>Submenu</span>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <Grid relaxed columns={4}>
                            <Grid.Column >
                              <Header as='h3'>Opening this week</Header>
                              <List>
                                <List.Item>
                                  <List.Content>
                                    <List.Header as='a'>Opening This Week</List.Header>
                                  </List.Content>
                                  <List.Content>
                                    <List.Header as='a'>Opening This Week</List.Header>
                                  </List.Content>
                                  <List.Content>
                                    <List.Header as='a'>Opening This Week</List.Header>
                                  </List.Content>
                                  <List.Content>
                                    <List.Header as='a'>Opening This Week</List.Header>
                                  </List.Content>
                                  <List.Content>
                                    <List.Header as='a'>Opening This Week</List.Header>
                                  </List.Content>
                                </List.Item>
                              </List>
                            </Grid.Column>
                            <Grid.Column>
                              <Header as='h3'>Opening this week</Header>
                              <List>
                                <List.Item>
                                  <List.Content>
                                    <List.Header as='a'>Opening This Week</List.Header>
                                  </List.Content>
                                </List.Item>
                              </List>
                            </Grid.Column>
                            <Grid.Column>
                              <Header as='h3'>Opening this week</Header>
                              <List>
                                <List.Item>
                                  <List.Content>
                                    <List.Header as='a'>Opening This Week</List.Header>
                                  </List.Content>
                                </List.Item>
                              </List>
                            </Grid.Column>
                          </Grid>
                        </Dropdown.Item>
                        <Dropdown.Item>List Item</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
            </div>
          </Menu.Item>
          
          <Menu.Item>
            <div>
              <NavbarModals />
              <SearchInput />
            </div>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar;