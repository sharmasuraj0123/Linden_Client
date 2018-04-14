import React, { Component } from 'react'
import { Popup, Button, Header, Image, Modal,List } from 'semantic-ui-react'
import LoginForm from  "./LoginLayout";
import RegisterForm from  "./RegisterForm";
import ContactUsForm from  "./ContactUsForm";



class ModalBasicExample extends Component {
  state = { openLogin: false, openRegister: false, openContactUs: false }

  showLogin = dimmer => () => this.setState({ dimmer, openLogin: true })
  closeLogin = () => this.setState({ openLogin: false })
  showRegister = dimmer => () => this.setState({ dimmer, openRegister: true })
  closeRegister = () => this.setState({ openRegister: false })
  showContactUs = dimmer => () => this.setState({ dimmer, openContactUs: true })
  closeContactUs = () => this.setState({ openContactUs: false })

  render() {
    const { openLogin, dimmer,openRegister, openContactUs } = this.state

    return (
      <div fluid style = {{paddingBottom:'1em'}}>
       
        <Button color='black' size='mini' href='about' style = {{maxWidth: 80}}>Seasons</Button>
        <Button color='black' size='mini' href='about' style = {{}}>About Linden</Button>
        <Button color='black' size='mini' href='lindenCritics' style = {{maxWidth: 150}}>Meet Our Critics</Button>
        <Modal trigger= {<Button color='black' size='mini' onClick={this.showContactUs('blurring')}>Contact Us</Button>}
         dimmer={dimmer} open={openContactUs} onClose={this.closeContactUs} style = {{marginTop: '8em',marginLeft: "30em", maxWidth: 450}}>
          <Modal.Content>
            <ContactUsForm/>   
          </Modal.Content>
        </Modal>
        <Modal trigger= {<Button color='black' size='mini' onClick={this.showLogin('blurring')}>Log-in</Button>}
         dimmer={dimmer} open={openLogin} onClose={this.closeLogin} style = {{marginTop: '17em',marginLeft: "30em", maxWidth: 450}}>
          <Modal.Content>
            <LoginForm/>   
          </Modal.Content>
        </Modal>
        <Modal trigger={<Button color='black' size='mini' onClick={this.showRegister('blurring')}>Register</Button>}
        dimmer={dimmer} open={openRegister} onClose={this.closeRegister} style = {{marginTop: '15em',marginLeft: "25em", maxWidth: 550}}>
          <Modal.Content>
           <RegisterForm/> 
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

export default ModalBasicExample;