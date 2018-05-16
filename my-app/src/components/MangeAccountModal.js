import React, { Component } from 'react';
import { Modal,List,Button, Menu } from 'semantic-ui-react';

import ProfileCard from "./ProfileCard";

class ManageAccountModal extends Component {
    render() {
        return (
            <Modal 
                trigger={<Menu.Item>Followers</Menu.Item>} 
                closeIcon 
                style={{ marginTop: '8em', marginLeft: "30em", maxWidth: 450 }}>
             <Modal.Header>My Account</Modal.Header>
             <Modal.Content  scrolling>
                <List>
                    <List.Item>
                        <ProfileCard/>
                    </List.Item>
                    <List.Item>
                        <ProfileCard/>
                    </List.Item>
                          
                </List>
             </Modal.Content>
             <Modal.Actions>
     
            </Modal.Actions>
            </Modal>
            
        );
    }
}

export default ManageAccountModal;