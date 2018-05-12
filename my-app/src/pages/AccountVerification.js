import React,  { Component }  from 'react'
import { Button, Container, Grid, Header, Image, List, Segment } from 'semantic-ui-react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

    class AccountVerification extends Component {

        
        componentDidMount() {
            let userId = this.props.match.params.userId;
            let token = this.props.match.params.token;

            axios.post('http://localhost:8080/verify',{
            userId: userId,
            token : token,
          })
              .then(function (response) {
                response = response.data;
                if (response.status === 'ERROR') {
                  console.log('Verify');
                } else {
                }
             
              })
              .catch(function (error) {
                console.log(error)
              })
          }       
        

        render() {
            
          return (
            <div>
        <Segment
            inverted
            vertical
            style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
            <Container textAlign='center'>
                
                <List horizontal inverted divided link>
                    <Button color='black' size='tiny'  style={{}}>About Linden</Button>
                </List>
            </Container>
        </Segment>
    </div>
            )
        }
      }

export default withRouter(AccountVerification);