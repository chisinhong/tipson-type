import 'font-awesome/css/font-awesome.css'
import * as React from 'react';
import '../index.css';

interface IFooterLink {
    icon: string;
}

class FooterBtn extends React.Component<IFooterLink> {
    public render() {
        return (
            <div>
                <i className={this.props.icon} />
            </div>
        )
    }
}

export default FooterBtn;