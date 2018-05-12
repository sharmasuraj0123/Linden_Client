import React, { Component } from 'react';
import Menu, { Segment, Grid, List, Tab, Divider, Table } from 'semantic-ui-react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import SideBarList from "../components/SideBarList";
import Movies from '../components/Movies';

const panes = [
    { menuItem: 'Movies', render: () => <Tab.Pane attached={false}> <Movies className='Movies' movies={this.props.movies} /></Tab.Pane> },
    { menuItem: 'TV Shows', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

class CastDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            movies: []
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        axios.get('http://localhost:8080/cast/' + id)
            .then(function (response) {
                let data = response.data;
                let cast = data.actors[0];
                console.log(data);
                this.setState({
                    name: cast.firstName + ' ' + cast.lastName,
                    movies: data.movies
                });
            }.bind(this));
    }

    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column width={12} style={{ paddingTop: '2em' }}>
                        <Segment raised>
                            <List horizontal >
                                <List.Item>
                                    <img alt={''} src={require("../images/testActorImg.jpg")}
                                        style={{ width: 216, height: 319 }} />
                                </List.Item>
                                <List.Item >
                                    <Table basic='very' style={{ height: 300 }}  >
                                        <Table.Header>
                                            <Table.Row>
                                                <Table.HeaderCell colSpan='3' style={{ fontSize: '3em' }}>{this.state.name}</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body style={{ fontSize: '1.5em' }}>
                                            <Table.Row>
                                                <Table.Cell><strong>Birthday:</strong></Table.Cell>
                                                <Table.Cell> Apr 4, 1965</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Highest Rated:</Table.Cell>
                                                <Table.Cell>Approved</Table.Cell>
                                            </Table.Row>
                                            <Table.Row>
                                                <Table.Cell>Lowest Rated:</Table.Cell>
                                                <Table.Cell>Denied</Table.Cell>
                                            </Table.Row>
                                        </Table.Body>
                                    </Table>
                                </List.Item>
                            </List>
                        </Segment>
                        <Divider horizontal inverted style={{ fontSize: '20px' }}> FILMOGRAPHY</Divider>
                        <Tab movies ={this.state.movies} menu={{ secondary: true, pointing: true, inverted: true }} panes={panes} />
                        
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Segment raised>
                            <List divided>
                                <List.Item>
                                    <SideBarList title='Opening This week' />
                                </List.Item>
                                <List.Item>
                                    <SideBarList title='Coming Soon' />
                                </List.Item>
                                <List.Item>
                                    <SideBarList title='Critic Picks' />
                                </List.Item>
                            </List>
                        </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default withRouter(CastDetails);