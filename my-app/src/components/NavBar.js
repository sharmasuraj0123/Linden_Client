import React, { Component } from 'react'
import { Input, Menu, Segment, Dropdown, Image, Header, List, Grid, Button } from 'semantic-ui-react'
import ModalBasicExample from './ModalBasicExample';
import FeaturedCard from './FeaturedCard';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }
  // componentDidMount() {
  //     axios.get('http://localhost:8080/search?keywords=pirate&page=1')
  //       .then(function (response) {
  //         let movieList = response.data.data;
  //         movieList.forEach(function (element) {
  //           element.imageURL = require("" + element.imageURL);
  //         });
  //         this.setState({
  //           movies: movieList
  //         });
  //       }.bind(this));
  //   };

  render() {
    // const { activeItem } = 'home';

    // const options_profile = [
    //   { key: 'user', text: 'Account', icon: 'user' },
    //   { key: 'settings', text: 'Settings', icon: 'settings' },
    //   { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    // ]

    // const trigger = (
    //   <span>
    //     <Image avatar src='https://img00.deviantart.net/a9d5/i/2013/226/5/7/male_avatar_test_by_oliviabronsonart-d6i40wt.png' />
    //   </span>
    // )

    return (
      <div >
        <Menu top inverted >
          <Menu.Item>
            <Image src={require("../images/Logo.png")} circular style={{ width: 100, height: 100 }} />
          </Menu.Item>
          {/* <Header as='h1' inverted size = 'huge' verticalAlign='middle'>LINDEN</Header>    */}
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
              <Menu inverted verticalAlign='top'>
                <Dropdown item simple text='Movies' >
                  <Dropdown.Menu fluid selection>
                    <Dropdown.Item fluid>
                      <Grid relaxed columns={4}>

                        <Grid.Column >
                          <Segment raised >
                            <Header as='h3' size='mini'>Movies In Theater</Header>
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

                            <Header as='h3' size='mini'>Top Performers</Header>

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
                    <Dropdown.Item fluid>List Item</Dropdown.Item>
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
              <Input icon='search' fluid placeholder='Search..' />
            </div>
            {/* <Dropdown trigger={trigger} options={options_profile} pointing='top right' icon={null} /> */}
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}

export default NavBar;