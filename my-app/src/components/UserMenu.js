import React from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import Cookies from 'universal-cookie';
import axios from 'axios';

// eslint-disable-next-line
const cookies = new Cookies(cookies);

function handleLogout() {
  axios.post('http://localhost:8080/logout',{
    token: cookies.get('obj').token,
})
    .then(function (response) {
      response = response.data;
      if (response.status === 'ERROR') {
        console.log('Cannot Log-Out');
      } else {
        response = response.obj;    
        cookies.remove('obj');
      }
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error)
    })
}

const trigger = (
  <span>
    <Icon name='user' /> Hello, {cookies.get('obj') ?    (cookies.get('obj') .firstName) :("Kelly" )}
  </span>
)

const options = [
  {
    key: 'user',
    text: <span>Signed in as <strong>{cookies.get('obj') ?    (cookies.get('obj') .firstName) :("Robert" )}</strong></span>,
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
