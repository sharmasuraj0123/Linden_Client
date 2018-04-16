import React, {Component}from 'react'
import  { Card, Icon, Image, Header,Segment } from 'semantic-ui-react'

class DescriptionCard extends Component {
  render() {
    return (
      <div style={{  width: 100,height: 100, fontSize:'16px'}}>
      <Image src={this.props.imagesrc} style={{ width: 100,height: 100 }} centered/>
     <p></p>
    </div>
    );
  }
}

export default DescriptionCard