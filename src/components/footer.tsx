import * as React from 'react';
import '../index.css';
import FooterIcon from './footerIcon';

class Footer extends React.Component {
    public render() {
        return (
            <div>
            <div className="space" />
            <FooterIcon />
            </div>
        )
    }
}

export default Footer;