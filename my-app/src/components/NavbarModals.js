import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import LoginForm from "./LoginLayout";
import RegisterForm from "./RegisterForm";
import Cookies from 'universal-cookie';
import UserMenu from "./UserMenu";

import axios from 'axios';

const cookies = new Cookies();
class NavbarModals extends Component {

  state = { openLogin: false, openRegister: false, openContactUs: false }
  showContactUs = dimmer => () => this.setState({ dimmer, openContactUs: true })
  closeContactUs = () => this.setState({ openContactUs: false })


  handleApplyForPromotion() {
    axios.post('http://localhost:8080/user/applyForPromotion', {
      token: cookies.get('obj').token,
    })
      .then(function (response) {
        response = response.data;
        if (response.status === 'ERROR') {
          console.log('Cannot Log-Out');
        } else {
          response = response.obj;    
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render() {
    // const { dimmer, openContactUs } = this.state
    const cookies = new Cookies();
    let LoginButton = cookies.get('obj') ? (<Button color='black' size='tiny' onClick= {(event, data) => this.handleApplyForPromotion() } style={{}}>Apply For Critic</Button>) : (<LoginForm />);
    let RegisterButton = cookies.get('obj') ? (<UserMenu />)  : (<RegisterForm />);
    return (
      <div fluid={'true'} style={{ paddingBottom: '1em' }}>
        <Button color='black' size='tiny' href='about' style={{}}>About Linden</Button>
        <Button color='black' size='tiny' href='lindenCritics' style={{ maxWidth: 150 }}>Meet Our Critics</Button>
        <Button color='black' size='tiny' href='contactUs' style={{}}>Contact Linden</Button>
        {LoginButton}
        {RegisterButton}
      </div>
    )
  }
}

export default NavbarModals;
