import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

export interface NavbarElementProps {
    name: string;
}

export default class NavbarElement extends React.Component<NavbarElementProps, {}>{
    public render() {
        return (
            <tr>
                <td><NavLink to={`/index/${this.props.name}`} className='nav-link'>{this.props.name}</NavLink></td>
            </tr>
        );
    }
}
