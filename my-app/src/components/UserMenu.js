import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import Cookies from 'universal-cookie';
import axios from 'axios';

// eslint-disable-next-line
const cookies = new Cookies(cookies);

function handleLogout() {
  axios.get('http://localhost:8080/logout')
    .then(function (response) {
      response = response.data;
      if (response.status === 'ERROR') {
        console.log('Cannot Log-Out');
      } else {
        response = response.obj;    
        cookies.remove('username');
      }
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error)
    })
}

const trigger = (
  <span>
    <Icon name='user' /> Hello, {cookies.get('username')}
  </span>
)

const options = [
  {
    key: 'user',
    text: <span>Signed in as <strong>{cookies.get('username')}</strong></span>,
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out', onClick: (event, data) => handleLogout() }
]

const UserMenu = () => (
  <Dropdown trigger={trigger} options={options} size='mini' />
)

export default UserMenu;
