import React, {Component}from 'react'
import  { Card, Icon, Image, Header,Segment } from 'semantic-ui-react'

class DescriptionCard extends Component {
  render() {
    return (
      <div style={{  width: 260,height: 240, fontSize:'19px'}}>
      <Image src={this.props.imagesrc} style={{ width: 150,height: 150 }} centered/>
     <p>Movies and TV shows are Verified Fall with a steady level of 75% or 
       higher after a set amount of reviews including 5 reviews from Top Critics.</p>
    </div>
    );
  }
}

export default DescriptionCard
