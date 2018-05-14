import React, { Component } from 'react';
import { List, Embed, Modal, Image } from 'semantic-ui-react';

class MovieVideoCard extends Component {

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = { openVideoCard: false, error: null, review: this.props.review }
    }
    showVideoCard = dimmer => () => this.setState({ dimmer, openVideoCard: true })
    closeVideoCard = () => this.setState({ openVideoCard: false, error: null })
    render() {
        const { openVideoCard, dimmer } = this.state
        return (

            <Modal trigger={<Image bordered
                onClick={this.showVideoCard('blurring')}
                src={this.props.poster}
                style={{ width: 280, verticalAlign: 'bottom' }}
            />}
                dimmer={dimmer} open={openVideoCard} onClose={this.closeVideoCard.bind(this)} style={{ marginTop: '17em', marginLeft: "30em", maxWidth: 3000 }}>
                <Modal.Content>
                    {this.props.videos.map((video) =>
                        <List.Item>
                            <Embed style={{ verticalAlign: 'bottom' }}
                                id={video}
                                source='youtube'
                                placeholder={this.props.poster}
                            />
                        </List.Item>
                    )}
                </Modal.Content>
            </Modal>

        );
    }
}









export default MovieVideoCard;