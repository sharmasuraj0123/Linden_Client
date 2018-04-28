import React, { Component } from 'react'
import { Label, Menu } from 'semantic-ui-react'

export default class MenuExampleVertical extends Component {
    state = { activeItem: 'All' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu vertical pointing fixed ='left center' style = {{marginTop: '10em', marginLeft: '5em'
        }}>

    <Menu.Item name='All' active={activeItem === 'All'} onClick={this.handleItemClick}>
    <Label color='teal'>143</Label>
        All
        </Menu.Item>
        <Menu.Item name='Movies' active={activeItem === 'Movies'} onClick={this.handleItemClick}>
    <Label>1</Label>
        Movies
        </Menu.Item>
        <Menu.Item name='TV Shows' active={activeItem === 'TV Shows'} onClick={this.handleItemClick}>
    <Label>51</Label>
        TV Shows
        </Menu.Item>
        <Menu.Item name='Actors' active={activeItem === 'Actors'} onClick={this.handleItemClick}>
    <Label>1</Label>
        Actors
        </Menu.Item>
            </Menu>
    )
    }
}

