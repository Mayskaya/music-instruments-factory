import React from 'react';
import { Component } from 'react';

var links: Object;

export default class Navbar extends Component {
    
    
    links = ['Good', 'GoodType', 'GoodInOffer', 'Factory', 'Factory', 'Factory', 'Factory', 'Offer', 'SupplyInStore', 'Store', 'Buyer', 'Staff', 'Delivery', 'Car', 'Mark', 'Model', 'User', 'Country', 'Address']

    renderLinks(){
        return this.links.map((link, index) =>{
            return (
                <div className="nav-links">
                <table className="nav-table">
                    <tr>
                        <th>
                            <a href='/' key={index} className='nav-link'> 
                                {link}
                            </a>
                        </th>
                    </tr>
                </table>
                </div>
            )
        })
    }

    public render() {
    return (
    <nav className="Navbar">
            {this.renderLinks()}
    </nav>);

  }
}
