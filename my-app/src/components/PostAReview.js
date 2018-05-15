import React, { Component } from 'react';
import { Button, Form, Header, List, Rating, Image,Card ,Menu} from 'semantic-ui-react';
import Cookies from 'universal-cookie';
import axios from 'axios';

let details = ' '
let rating = 0
class PostAReview extends Component {
    handlePostReview() {
        const cookies = new Cookies();
        let id = this.props.id;
        console.log(rating);
        let token = (cookies.get('obj')) ? cookies.get('obj').token : null;
        axios.post('http://localhost:8080/user/postReview', {
            token: token,
            contentId: id,
            contentType:   this.props.contentType,
            rating: rating,
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
            <div>
                <Menu inverted>
               
                <Menu.Item>
                <List>
                    <List.Item>
                <Header  style={{ fontSize: '25px', color: '#ffffff' }}>
                    Add your Rating
                </Header>
                </List.Item>
                <List.Item>
                    <Card style={{ width: 350,}}>
                        <List>
                        <List.Item >
                            <Rating maxRating={5}
                                onRate={(e, data) => rating = data.rating}
                                clearable size='massive' style={{ color: 'white' }} />
                             </List.Item >
                             <List.Item >    
                            <Form reply fluid='true' size='large'>
                                <Form.TextArea onChange={(e, data) => details = data.value} />
                                <Button content='Post A Review'
                                    onClick={(event, data) => this.handlePostReview()}
                                    labelPosition='left' icon='edit' />
                            </Form>
                        </List.Item>
                        </List>
                    </Card>
                    </List.Item>
                </List>
                </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default PostAReview;