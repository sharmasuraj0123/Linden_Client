import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

class AboutUs extends Component {
    render() {
        return (
            <div style={{ paddingTop: '1em' }}>
                <Divider inverted horizontal style={{ fontSize: '2.5em' }}> CONTACT LINDEN </Divider>
                <p style={{ fontSize: '16px' }}>
                    Visit About Linden® to learn more about the LindoMeter and team behind it.
For quick answers to common questions about our site, visit our Frequently Asked Questions.
Still have questions or want to submit a movie or TV data edit request? Contact us via info@linden.com.
            </p>

                <Divider inverted horizontal style={{ fontSize: '2.5em' }}> Edit Requests</Divider>
                <p style={{ fontSize: '16px' }}>
                    Tell us about missing or incorrect movie or TV information by submitting a request via our Email Form.
Are we missing a review? Review our Lindometer Criteria to make sure that the publication and critic are approved before submitting a request to add a review..
            </p>
                <p style={{ fontSize: '16px' }}>
                    The Lindometer score represents the percentage of professional critic reviews that are positive for a given film or television show.
            A Lindometer score is calculated for a movie or TV show after it receives at least five reviews
            </p>

                <Divider inverted horizontal style={{ fontSize: '2.5em' }}> Critic or Publication Submission</Divider>
                <p>
                    Movie and TV reviews used to calculate the Lindometer come from publications or individual critics that have been selected by the Rotten Tomatoes staff.
Interested in adding yourself as a critic or your publication as a source? Review our Lindometer Criteria to determine if you are eligible. If you are eligible,
instructions to apply are also listed on the page.
                    </p>
            </div>
        )
    }
}

export default AboutUs;