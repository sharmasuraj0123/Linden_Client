import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const marginStyle = {
    'margin': 20
};

class NotFound extends Component {
    render() {
        console.log(this.props);
        return (
            <div style={marginStyle} >
                <Header size='huge'>404: <code>{this.props.location.pathname}</code> Not Found! </Header>
            </div >
        );
    }
}

export default withRouter(NotFound);
