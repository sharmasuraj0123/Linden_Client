import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import SearchInput from '../components/SearchInput';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';

const marginStyle = {
    'margin': 20
};

class SearchResultsPage extends Component {

    componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        let keywords = values.query.replace(/ /g, '+');
        console.log(keywords);
        // axios.get('http://localhost:8080/search?keywords='+keywords+'&page=1')
        //     .then(function (response) {
        //         let movieList = response.data.data;
        //         movieList.forEach(function (element) {
        //         });
        //         this.setState({
        //             movies: movieList
        //         });
        //     }.bind(this));
    }

    render() {

        return (
            <div style={marginStyle} >
                <Header size='huge'>Linden</Header>
                <SearchInput />
            </div >
        );
    }
}

export default withRouter(SearchResultsPage);
