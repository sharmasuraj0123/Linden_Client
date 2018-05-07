import React, { Component } from 'react';
import { Segment, Grid, List, Tab, Divider, Table } from 'semantic-ui-react';
import SideBarList from "../components/SideBarList";

const panes = [
    { menuItem: 'Movies', render: () => <Tab.Pane attached={false}></Tab.Pane> },
    { menuItem: 'TV Shows', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
]

class CastDetails extends Component {
    render() {
        return (
            <div>
                <Grid columns>
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
                                                <Table.HeaderCell colSpan='3' style={{ fontSize: '3em' }}>Robert Downey Jr.</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body style={{ fontSize: '1.5em' }}>
                                            <Table.Row>
                                                <Table.Cell bold><strong>Birthday:</strong></Table.Cell>
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
                        <Tab menu={{ secondary: true, pointing: true, inverted: true }} panes={panes} />




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

export default CastDetails;