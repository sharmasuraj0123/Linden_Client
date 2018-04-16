import React from 'react'
import { Card } from 'semantic-ui-react'

const FeaturedCard = () => (
    <Card style={{ width: 200,height: 250 }}
      image={require("../images/Logo.png")}
      header='Featured'
    />
)

export default FeaturedCard;
