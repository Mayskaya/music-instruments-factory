import React from 'react';
import Navbar from './Navbar';

export interface NavbarElementProps {
    name: string;
}

export default class NavbarElement extends React.Component<NavbarElementProps, {}>{
    public render() {
        return (
            <tr>
                <td><a href="/" className='nav-link'>{this.props.name}</a></td>
            </tr>
        );
    }
}