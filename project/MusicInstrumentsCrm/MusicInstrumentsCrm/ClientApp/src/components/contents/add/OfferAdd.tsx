import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Offer from '../../../domain/Offer';
import Buyer from '../../../domain/Buyer';
import Staff from '../../../domain/Staff';
import Delivery from '../../../domain/Delivery';
import User from '../../../domain/User';
import Car from '../../../domain/Car';
import Model from '../../../domain/Model';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';

interface OfferAddProps extends RouteComponentProps {
}

interface OfferAddState {
    offer: Offer;
    buyer: Array<Buyer>;
    seller: Array<Staff>;
    delivery: Array<Delivery>;
}

export default class OfferAdd extends React.Component<OfferAddProps, OfferAddState> {

    constructor(props: OfferAddProps) {
        super(props);
        this.state = {
            offer: new Offer(0, '', new Buyer(0, '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)), new Delivery(0, new Car(0, '', '', new Model(0, '', new Mark(0, '', new Country(0, '')), new Date())), new Address(0, ''), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true))), 0),
            buyer: new Array(),
            seller: new Array(),
            delivery: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Offer');
        xhr.onload = (evt) => {
            let res: Offer = JSON.parse(xhr.responseText);
            this.setState({ offer: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

        let xhrB = new XMLHttpRequest();
        xhrB.open(HttpMethod.GET, 'http://localhost/api/v1/Buyer/');
        xhrB.onload = (evt) => {
            let res: Array<Buyer> = JSON.parse(xhrB.responseText);
            this.setState({ buyer: res });
        };
        xhrB.onerror = (evt) => {
            alert("error");
        };
        xhrB.send();

        let xhrS = new XMLHttpRequest();
        xhrS.open(HttpMethod.GET, 'http://localhost/api/v1/Staff/');
        xhrS.onload = (evt) => {
            let res: Array<Staff> = JSON.parse(xhrS.responseText);
            this.setState({ seller: res });
        };
        xhrS.onerror = (evt) => {
            alert("error");
        };
        xhrS.send();

        let xhrD = new XMLHttpRequest();
        xhrD.open(HttpMethod.GET, 'http://localhost/api/v1/Delivery/');
        xhrD.onload = (evt) => {
            let res: Array<Delivery> = JSON.parse(xhrD.responseText);
            this.setState({ delivery: res });
        };
        xhrD.onerror = (evt) => {
            alert("error");
        };
        xhrD.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Offer');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Offer');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.offer));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            offer: value,
        });
    }

    public render() {
        return (
            <div className="OfferAdd">
                <form className="form-add">
                    <label>
                        <span>Код заказа</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Покупатель</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.buyer.map((team) => <option value={`${team.firstName} ${team.lastName}`}>{`${team.firstName} ${team.lastName}`}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Продавец</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.seller.map((team) => <option value={`${team.firstName} ${team.lastName}`}>{`${team.firstName} ${team.lastName}`}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Доставка</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.delivery.map((team) => <option key={team.address.fullName} value={team.address.fullName}>{team.address.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Сумма заказа</span>
                        <input type="number" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Offer"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}