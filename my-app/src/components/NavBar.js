import React, { Component } from 'react'
import { Menu, Dropdown, Image, List, Grid, Button } from 'semantic-ui-react'
import NavbarModals from './NavbarModals';
import SearchInput from './SearchInput';
import FeaturedMovieCarousal from "../components/FeaturedMovieCarousal";
import { withRouter, Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div >
        <Menu top={'true'} inverted borderless>
          <Menu.Item>
            <Image
              src={require('../images/LogoNew.png')}
              style={{ width: 120, height: 100, verticalAlign: 'top' }}
              as='a'
              href='/'
            />
          </Menu.Item>
          <Menu.Item >
            <div>
              <div >
                <SearchInput />
              </div>
              <Menu inverted style={{ fontSize: '25px', verticalAlign: 'bottom' }}>
                <Dropdown item simple text='Movies' >
                  <Dropdown.Menu style={{ fontSize: '16px', width: 650 }}>
                    <Dropdown.Item>
                      <Grid columns={2} divided >
                        <Grid.Column width={6}>
                          <List>
                            <List.Header style={{ fontSize: '18px', paddingBottom: '0.5em' }}>NEW</List.Header>
                            <List.Item>
                              <Link to='/openingThisWeek'>
                                <List.Header as='a'>Opening This Week</List.Header>
                              </Link>
                            </List.Item>
                            <List.Item>
                              <Link to='/topBoxOffice'>
                                <List.Header as='a'>Top Box Office</List.Header>
                              </Link>
                            </List.Item>
                            <List.Item>
                              <Link to='/comingSoon'>
                                <List.Header as='a'>Coming Soon to Theaters</List.Header>
                              </Link>
                            </List.Item>
                            <List.Item>
                              <Link to='/movies/fresh'>
                                <List.Header as='a'>Certified Fresh Movies</List.Header>
                              </Link>
                            </List.Item>
                          </List>
                          <List>
                            <List.Header style={{ fontSize: '18px', paddingBottom: '0.5em' }}>ALL TIME</List.Header>
                            <List.Item>
                              <Link to='/oscar'>
                                <List.Header as='a'>Oscar Winners</List.Header>
                              </Link>
                            </List.Item>
                            <List.Item>
                              <Link to='/highestRatedMovies'>
                                <List.Header as='a'>Top Rated Movies</List.Header>
                              </Link>
                            </List.Item>
                          </List>
                        </Grid.Column>
                        <Grid.Column width={10}>
                          <List.Header style={{ fontSize: '18px', paddingBottom: '0.5em' }}>FEATURED MOVIES</List.Header>
                          <FeaturedMovieCarousal />
                        </Grid.Column>
                      </Grid>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown item simple text='TV Shows'>
                  <Dropdown.Menu style={{ fontSize: '16px', width: 650 }}>
                    <Dropdown.Item>
                      <Grid columns={2} divided >
                        <Grid.Column width={6}>
                        </Grid.Column>
                        <Grid.Column width={10}>
                          <List.Header style={{ fontSize: '18px', paddingBottom: '0.5em' }}>FEATURED TV</List.Header>
                          <FeaturedMovieCarousal />
                        </Grid.Column>
                      </Grid>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu>
            </div>
          </Menu.Item>
          <Menu.Item position='right' style={{ fontSize: '12px' }}>
            <div>
              <NavbarModals />
              <Button size='huge'
                href='https://www.facebook.com/Linden-Watch-Rate-Share-860703627449132/'
                circular
                color='black'
                icon='facebook' />
              <Button
                href='https://twitter.com/Linden69880224?cn=bG9naW5fbm90aWZpY2F0aW9u&refsrc=email'
                size='huge'
                circular
                color='black'
                icon='twitter' />
            </div>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(NavBar);
