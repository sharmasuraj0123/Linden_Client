import React, { Component } from 'react'
import { Grid, Segment, Pagination } from 'semantic-ui-react'
import axios from 'axios';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Movies from '../components/Movies';
import StepExampleLinkClickable from "../components/StepExampleLinkClickable";

const SegmentStyle = {
    flex: 1,
    marginLeft: "3em",
    marginRight: "3em",
   
};

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        };
    }


    componentDidMount() {
        console.log("ds");
        axios.get('http://localhost:8080/search?keywords=the&page=1')
            .then(function (response) {
                console.log(response);
                let movieList = response.data.movies;
                let listLength=0;
                movieList.forEach(function (element) {
                    element.imageURL = require("../images/Logo.png");
                    listLength++;
                });
                this.setState({
                    movies: movieList,
                    numberOfmovies: listLength
                });
            }.bind(this));
    }


    handleItemClick = (e, {name}) => this.setState({activeItem: name});




    render() {
        return (
             
            <Segment raised  style = {SegmentStyle}>
            < NavBar/>
            <Grid columns='equal'>
            <Grid.Column>
            <Segment>
            <StepExampleLinkClickable numberOfmovies={this.state.numberOfmovies}/>
            <Movies className='Movies' movies={this.state.movies} />
            <Pagination  defaultActivePage={5} totalPages={10} horizontalAlign='middle'/>
            </Segment>
            </Grid.Column>


            <Grid.Column>
            <Segment>
            </Segment>
            </Grid.Column>

            </Grid>
            <Footer/>
            </Segment>
           
            

        );
    }
}

export default SearchResults;
