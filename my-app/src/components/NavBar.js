import React, { Component } from 'react'
import  { Menu, Dropdown, Image, Header, List, Grid, Button,Segment, Divider } from 'semantic-ui-react'
import NavbarModals from './NavbarModals';
import SearchInput from './SearchInput';
import FeaturedCard from "../components/FeaturedCard";

import FeaturedMovieCarousal from "../components/FeaturedMovieCarousal";
import SideBarList from "../components/SideBarList";

class NavBar extends Component {
  render() {
    return (
      <div >
        <Menu top={'true'} inverted borderless>
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
              
                <SearchInput /> 
              </div>
              <Menu inverted style={{ fontSize:'25px', verticalAlign: 'bottom'}}>
                <Dropdown item simple text='Movies' >
                <Dropdown.Menu style={{ fontSize:'16px', width:650}}>
                  <Dropdown.Item>  
                    <Grid columns={2} divided >
                      <Grid.Column width={6}>
                            <List>
                              <List.Header style={{ fontSize:'18px',paddingBottom:'0.5em'}}>NEW</List.Header>
                            <List.Item>
                              <List.Header as='a'>Opening This Week</List.Header>
                            </List.Item>
                            <List.Item>
                              <List.Header as='a'>Top Box Office</List.Header>
                            </List.Item>
                            <List.Item>
                              <List.Header as='a'>Coming Soon to Theaters</List.Header>
                            </List.Item>
                            <List.Item>
                              <List.Header as='a'>Certified Fresh Movies</List.Header>
                            </List.Item>
                          </List>
                        
                          <List>
                            <List.Header style={{ fontSize:'18px',paddingBottom:'0.5em'}}>ALL TIME</List.Header>
                          <List.Item>
                            <List.Header as='a'>Box Office</List.Header>
                          </List.Item>
                          <List.Item>
                            <List.Header as='a'>Oscar Winners</List.Header>
                          </List.Item>
                          <List.Item>
                            <List.Header as='a'>Top Rated Movies</List.Header>
                          </List.Item>
                          <List.Item>
                            <List.Header as='a'>Most Popular Movies</List.Header>          
                          </List.Item>
                        </List>        
                    </Grid.Column > 
                    <Grid.Column width={10}>
                      <List.Header style={{ fontSize:'18px',paddingBottom:'0.5em'}}>FEATURED MOVIES</List.Header>
                    <FeaturedMovieCarousal/>
                    </Grid.Column >  
                     </Grid>  
                    </Dropdown.Item> 
                </Dropdown.Menu> 
                </Dropdown>



                <Dropdown item simple text='TV Shows'>
                <Dropdown.Menu style={{ fontSize:'16px', width:650}}>
                  <Dropdown.Item>  
                    <Grid columns={2} divided >
                      <Grid.Column width={6}>   
                    </Grid.Column > 
                    <Grid.Column width={10}>
                      <List.Header style={{ fontSize:'18px',paddingBottom:'0.5em'}}>FEATURED TV</List.Header>
                    <FeaturedMovieCarousal/>
                    </Grid.Column >  
                     </Grid>  
                    </Dropdown.Item> 
                </Dropdown.Menu> 
                </Dropdown>




               
              </Menu>
            </div>
          </Menu.Item>
          
          <Menu.Item position='right' style={{ fontSize:'12px'}}>
          <div>
            <NavbarModals />
            <Button size='huge' circular color='black'  icon='facebook' />
                <Button size='huge' circular color='black' icon='instagram' />
              </div>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar;