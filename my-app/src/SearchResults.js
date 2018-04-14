import React, { Component,View }  from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Sidebar,Pagination } from 'semantic-ui-react'
import NavBar from "./NavBar";
import Footer from "./Footer";
import Movies from './Movies';
import Content from './Content';
import MenuExampleVertical from './MenuExampleVertical';
import ModalBasicExample from './ModalBasicExample';
import axios from 'axios';
import StepExampleLinkClickable from "./StepExampleLinkClickable";
import './App.css';


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
            tvShows: [{
                title: "Prison Break",
                rating: 4,
                imageUrl: require("./images/prison_break.jpg")
            },
                {
                    title: "Pitchers",
                    rating: 5,
                    imageUrl: require("./images/pitcher.png")
                }
            ],
            activeItem: 'movie'
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
                    element.imageURL = require("./images/Logo.png");
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
