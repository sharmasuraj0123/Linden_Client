import React, { Component } from 'react'
import { Step, Label } from 'semantic-ui-react'

// const tabBarStyle = {
//   alignItems: 'center',
//   justifyContent: 'center'
// };

export default class StepExampleLinkClickable extends Component {
  state = { active: 'All' }

  handleClick = (e, { title }) => this.setState({ active: title })

  render() {
    const { active } = this.state

    return (
      <div size='mini'>
        <Step.Group fixed='center' size='mini'>
          <Step active={active === 'All'} onClick={this.handleClick} title='All'>
            <Step.Title>All <Label>{this.props.resultCount.all}</Label>
            </Step.Title>
          </Step>
          <Step active={active === 'Movies'} onClick={this.handleClick} title='Movies'>
            <Step.Title>Movies <Label>{this.props.resultCount.movies}</Label>
            </Step.Title>
          </Step>
          <Step active={active === 'TVShows'} onClick={this.handleClick} title='TVShows'>
            <Step.Title>TV Shows <Label>{this.props.resultCount.tvShows}</Label>
            </Step.Title>
          </Step>
          <Step active={active === 'Actors'} onClick={this.handleClick} title='Actors'>
            <Step.Title>Actors <Label>{this.props.resultCount.actors}</Label>
            </Step.Title>
          </Step>
        </Step.Group>
      </div>
    )
  }
}
