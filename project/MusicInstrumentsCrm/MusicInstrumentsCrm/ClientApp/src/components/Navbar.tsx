import React from 'react';
import NavbarElement from './NavbarElement';
import { Router, BrowserRouter, Route } from 'react-router-dom';

export default class Navbar extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="Navbar">
                <table className="table-navbar">
                    <NavbarElement name='Address' />
                    <NavbarElement name='Buyer' />
                    <NavbarElement name='Car' />
                    <NavbarElement name='Country' />
                    <NavbarElement name='Delivery' />
                    <NavbarElement name='Factory' />
                    <NavbarElement name='Good' />
                    <NavbarElement name='GoodType' />
                    <NavbarElement name='GoodInOffer' />
                    <NavbarElement name='Mark' />
                    <NavbarElement name='Model' />
                    <NavbarElement name='Offer' />
                    <NavbarElement name='Staff' />
                    <NavbarElement name='Store' />
                    <NavbarElement name='SupplyInStore' />
                    <NavbarElement name='User' />
                </table>
            </div>);
    }
}