import React, { Component } from 'react';
import { Divider, List } from 'semantic-ui-react';

import DescriptionCard from "../components/DescriptionCard";

class TermsAndCondition extends Component {
    render() {
        return (
            <div style={{ paddingTop: '1em' }}>
                <Divider inverted horizontal style={{ fontSize: '2.5em' }}> Terms and Conditions</Divider>
                <p style={{ fontSize: '16px' }}>
                These Linden Terms and Policies (the "Linden Terms and Policies") 
                were last updated on: January 7, 2018. When we say "our", "us", "we" or "Linden" 
                in these Linden Terms and Policies, we mean Linden Media, LLC or its subsidiaries. 
        
            </p>

            <p>
            These Linden Terms and Policies apply to websites and applications operating under the Linden, 
                we may revise these Linden Terms and Policies. You can determine when these Linden Terms and Policies were last revised by referring to the top of this page. 
                Any changes to the Linden Terms and Policies will become effective 
                upon posting of the revised Linden Terms and Policies on the Internet, 
                accessible through Services, unless otherwise noted. By continuing to use Services following such changes, 
                you will be deemed to have agreed to such changes.
                </p>

            <p>
            If you do not agree with the terms of these Linden Terms and Policies, 
                as they may be amended from time to time, please do not purchase movies from 
                Linden or continue using the Services. To the extent that an arbitrator or court 
                of applicable jurisdiction determines that applying any changes to these Linden Terms and 
                Policies would render this an illusory or unenforceable contract, 
                such changes shall be applicable on a prospective basis only, with respect to events or 
                circumstances occurring after the date of such changes.
                </p>

            <Divider inverted horizontal style={{ fontSize: '2.5em' }}> Privacy Policies</Divider>
            <p>
            This Privacy Policy describes the privacy practices of Linden Media, LLC and its subsidiary companies, 
           This Privacy Policy describes how we collect, use, disclose and transfer the information you provide when you 
           interact with us via those of our websites, applications, emails and other communications 
           that link to or reference this policy (the "Online Services")
            </p>

            <p>
            Our Information Collection: We may collect personal information through the Services 
            including your name, email address, zip code, location information, payment information, 
            and other demographic information when you use the Services or make a purchase through the Services.  
            We and our third party ad networks may use cookies and other technologies to automatically 
            collect certain non-personal information about you through the Services to provide you with 
            relevant advertising.
                </p>
            </div>
        )
    }
}

export default TermsAndCondition;