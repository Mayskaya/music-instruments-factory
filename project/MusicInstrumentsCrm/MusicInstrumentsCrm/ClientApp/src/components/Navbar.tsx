import React from 'react';
import NavbarElement from './NavbarElement';
import { Router, BrowserRouter, Route } from 'react-router-dom';

export default class Navbar extends React.Component<{}, {}> {
    public render() {
        return (
            <BrowserRouter>
                <div className="Navbar">
                    <table className="table-navbar">
                        <NavbarElement name='Good' />
                        <NavbarElement name='GoodType' />
                        <NavbarElement name='GoodInOffer' />
                        <NavbarElement name='Factory' />
                        <NavbarElement name='Offer' />
                        <NavbarElement name='SupplyInStore' />
                        <NavbarElement name='Store' />
                        <NavbarElement name='Buyer' />
                        <NavbarElement name='Staff' />
                        <NavbarElement name='Delivery' />
                        <NavbarElement name='Car' />
                        <NavbarElement name='Mark' />
                        <NavbarElement name='Model' />
                        <NavbarElement name='User' />
                        <NavbarElement name='Country' />
                        <NavbarElement name='Address' />
                    </table>
                </div>
        </BrowserRouter>);
    }
}