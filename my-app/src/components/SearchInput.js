import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class SearchInput extends Component {

    handleClick(query) {
        this.props.history.push('/search?keywords=' + this.query + '&page=1');
        window.location.reload();
    }

    render() {
        // eslint-disable-next-line
        let { query } = '';
        return (
            <Input
                fluid
                icon={{ name: 'search', link: true, onClick: (e, data) => this.handleClick(this.query) }}
                placeholder='Search...'
                onChange={(e, data) => {
                    this.query = data.value
                }}
                onKeyDown={(e, data) => {
                    if(e.keyCode === 13) this.handleClick(this.query);
                }}
            />
        );
    }
}

export default withRouter(SearchInput);
