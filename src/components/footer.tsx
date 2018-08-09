import * as React from 'react';
import '../index.css';
import FooterLink from './footer-btn';

class Footer extends React.Component {
    public render() {
        return (
            <div>
            <div className="space" />
            <footer className="fixed-bottom d-flex justify-content-around footer-btn">
                <FooterLink icon="fas fa-clipboard-check" />
                <FooterLink icon="fas fa-trophy" />
                <FooterLink icon="fas fa-search" />
                <FooterLink icon="fas fa-user" />
            </footer>
            </div>
        )
    }
}

export default Footer;