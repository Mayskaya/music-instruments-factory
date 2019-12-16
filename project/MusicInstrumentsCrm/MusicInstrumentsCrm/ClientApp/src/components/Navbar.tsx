import React from 'react';
import NavbarElement from './NavbarElement';
import { Router, BrowserRouter, Route } from 'react-router-dom';
import HttpMethod from '../util/http/HttpMethods';

export default class Navbar extends React.Component<{}, {}> {

    handleDownload(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/summary');
        xhr.onload = (evt) => {
            alert('Идет скачивание!');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="Navbar">
                <table className="table-navbar">
                    <button className="btn-content" onClick={(evt) => { this.handleDownload(evt) }}>Выгрузить отчёт по заказам</button>
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