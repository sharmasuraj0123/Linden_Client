import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import SearchInput from '../components/SearchInput';

const marginStyle = {
    'margin': 20
};

class MoviePage extends Component {
    render() {
        return (
            <div style={marginStyle} >
                <Header size='huge'>Linden</Header>
                <SearchInput/>
            </div >
        );
    }
}

export default MoviePage;
