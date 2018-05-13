import React, { Component } from 'react';
import { Button, Form, Header, List, Rating, Image } from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';



const cookies = new Cookies();
let details = ' '
class PostAReview extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    handlePostReview() {
        const cookies = new Cookies();
        let id = this.props.id;
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.post('http://localhost:8080/user/postReview', {
            token: token,
            contentId: id,
            contentType: "MOVIE",
            rating: 1,
            details: details
        })
            .then(function (response) {
                response = response.data;
                window.location.reload();
                if (response.status === 'ERROR') {
                    console.log(response);
                }
            })
            .catch(function (error) {
                console.log(error)
                
            });
    }
    render() {
        

        return (
            
            <List>
                 <Header style={{ fontSize: '20px', color: '#ffffff' }}>
                                                Add your Rating
                                            </Header>
                                                <List.Item>
                                                    <List horizontal>
                                                        <List.Item>
                                                            <Image floated='left' style={{ width: 150, height: 150, verticalAlign: 'bottom' }} src={require('../images/defaultPicture.jpg')} />
                                                        </List.Item>
                                                        <List.Item >
                                                            <Rating maxRating={5} clearable size='large' style={{ color: 'white' }} />
                                                            <Form reply fluid='true' size='large'>
                                                                <Form.TextArea onChange={(e, data) => details = data.value} />
                                                                <Button content='Post A Review'
                                                                    onClick={(event, data) => this.handlePostReview()}
                                                                    labelPosition='left' icon='edit' />
                                                            </Form>
                                                        </List.Item>
                                                    </List>
                                                </List.Item>
                                            </List>
        );
    }
}

export default PostAReview;