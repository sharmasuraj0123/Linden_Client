import React, { Component } from 'react'
import { Menu, Segment, Dropdown, Image, Header, List, Grid, Button } from 'semantic-ui-react'
import ModalBasicExample from './ModalBasicExample';
import FeaturedCard from './FeaturedCard';
import SearchInput from './SearchInput';

class NavBar extends Component {
  render() {
    return (
      <div >
        <Menu top={'true'} inverted >
          <Menu.Item>
            <Image
              src={require('../images/Logo.png')}
              circular
              style={{ width: 100, height: 100 }}
              as='a'
              href='/'
            />
          </Menu.Item>
          <Menu.Item >
            <div>
              <div >
                <Button size='big' circular color='black' icon='facebook' />
                <Button size='big' circular color='black' icon='instagram' />
                <Button size='big' circular color='black' icon='google plus' />
                <Button size='big' circular color='black' icon='youtube play' />
                <Button size='big' circular color='black' icon='pinterest' />
                <Button size='big' circular color='black' icon='twitter' />
                <Button size='big' circular color='black' icon='tumblr' />
              </div>
              <Menu inverted>
                <Dropdown item simple text='Movies' >
                  <Dropdown.Menu fluid={'true'} selection={'true'}>
                    <Dropdown.Item fluid={'true'}>
                      <Grid relaxed columns={4}>
                        <Grid.Column >
                          <Segment raised >
                            <Header as='h3' size='tiny'>Movies In Theater</Header>
                            <List>
                              <List.Item>
                                <List.Content>
                                  <List.Header as='a'>Opening This Week</List.Header>
                                </List.Content>
                                <List.Content>
                                  <List.Header as='a'>Top Box Office</List.Header>
                                </List.Content>
                                <List.Content>
                                  <List.Header as='a'>Coming Soon</List.Header>
                                </List.Content>
                                <List.Content>
                                  <List.Header as='a'>Fresh</List.Header>
                                </List.Content>
                                <List.Content>
                                  <List.Header as='a'>Featured</List.Header>
                                </List.Content>
                              </List.Item>
                            </List>
                            <Header as='h3' size='tiny'>Top Performers</Header>
                            <List>
                              <List.Item>
                                <List.Content>
                                  <List.Header as='a'>Top Rated</List.Header>
                                </List.Content>
                              </List.Item>
                              <List.Item>
                                <List.Content>
                                  <List.Header as='a'>Critically Acclaimed</List.Header>
                                </List.Content>
                              </List.Item>
                              <List.Item>
                                <List.Content>
                                  <List.Header as='a'>Trending Now</List.Header>
                                </List.Content>
                              </List.Item>
                            </List>
                          </Segment>
                        </Grid.Column>
                        <Grid.Column>
                          <FeaturedCard />
                        </Grid.Column>
                        <Grid.Column>
                          <FeaturedCard />
                        </Grid.Column>
                      </Grid>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item simple text='TV Shows'>
                  <Dropdown.Menu>
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
                        <ModalBasicExample />
                      </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

              </Menu>
            </div>
          </Menu.Item>
          <Menu.Item position='right'>
            <div>
              <ModalBasicExample />
              <SearchInput />
            </div>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar;