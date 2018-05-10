import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import LoginForm from "./LoginLayout";
import RegisterForm from "./RegisterForm";
import ContactUsForm from "./ContactUsForm";
import Cookies from 'universal-cookie';
import UserMenu from "./UserMenu";

class NavbarModals extends Component {

  state = { openLogin: false, openRegister: false, openContactUs: false }  
  showContactUs = dimmer => () => this.setState({ dimmer, openContactUs: true })
  closeContactUs = () => this.setState({ openContactUs: false })

  render() {
    const { dimmer, openContactUs } = this.state
    const cookies = new Cookies();    
    let LoginButton = cookies.get('obj') ?    (<UserMenu/>) :(<LoginForm/> );
    let RegisterButton = cookies.get('obj') ?   (<div/>): (<RegisterForm />);

    return (
      <div fluid={'true'} style={{ paddingBottom: '1em' }}>
        <Button color='black' size='tiny' href='about' style={{}}>About Linden</Button>
        <Button color='black' size='tiny' href='lindenCritics' style={{ maxWidth: 150 }}>Meet Our Critics</Button>
        <Modal trigger={<Button color='black' size='tiny' onClick={this.showContactUs('blurring')}>Contact Us</Button>}
          dimmer={dimmer} open={openContactUs} onClose={this.closeContactUs} style={{ marginTop: '8em', marginLeft: "30em", maxWidth: 450 }}>
          <Modal.Content>
            <ContactUsForm/>
          </Modal.Content>
        </Modal>
        {LoginButton}
        {RegisterButton}
      </div>
    )
  }
}

export default NavbarModals;
