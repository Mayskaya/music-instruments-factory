import React from 'react';
import Offer from '../../../domain/Offer';
import Buyer from '../../../domain/Buyer';
import User from '../../../domain/User';
import Staff from '../../../domain/Staff';
import Delivery from '../../../domain/Delivery';
import Car from '../../../domain/Car';
import Model from '../../../domain/Model';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps {
    id: string;
}

interface OfferEditProps extends RouteComponentProps<MatchProps> {
}

interface OfferEditState {
    id: number;
    offer: Offer;
    buyer: Array<Buyer>;
    seller: Array<Staff>;
    delivery: Array<Delivery>;
}

export default class OfferEdit extends React.Component<OfferEditProps, OfferEditState> {

    constructor(props: OfferEditProps) {
        super(props);
        this.state = {
            id: parseInt(props.match.params.id),
            offer: new Offer(0, '', new Buyer(0, '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)), new Delivery(0, new Car(0, '', '', new Model(0, '', new Mark(0, '', new Country(0, '')), new Date())), new Address(0, ''), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true))), 0),
            buyer: new Array(),
            seller: new Array(),
            delivery: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Offer/${this.props.match.params.id}`);
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
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Offer');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Offer');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.offer));
    }

    handleDeleteButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Offer/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Offer');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
    }

    handleInputChangeCode(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldOffer: Offer = this.state.offer;
        oldOffer.code = value;
        this.setState({
            offer: oldOffer,
        });
    }
    handleInputChangeByuer(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldOffer: Offer = this.state.offer;
        oldOffer.buyer = value;
        this.setState({
            offer: oldOffer,
        });
    }
    handleInputChangeSeller(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldOffer: Offer = this.state.offer;
        oldOffer.seller = value;
        this.setState({
            offer: oldOffer,
        });
    }
    handleInputChangeDelivery(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldOffer: Offer = this.state.offer;
        oldOffer.delivery.address.fullName = value;
        this.setState({
            offer: oldOffer,
        });
    }
    handleInputChangeSum(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldOffer: Offer = this.state.offer;
        oldOffer.sum = value;
        this.setState({
            offer: oldOffer,
        });
    }

    public render() {
        let that: OfferEdit = this;
        return (
            <div className="OfferEdit">
                <form className="form-add">
                    <label>
                        <span>Код заказа</span>
                        <input type="text" onChange={(evt) => { this.handleInputChangeCode(evt) }} defaultValue={that.state.offer != null ? that.state.offer.code : ''}></input>
                    </label>
                    <label>
                        <span>Покупатель</span>
                        <select onChange={(evt) => { this.handleInputChangeByuer(evt) }} defaultValue={`${this.state.offer.buyer.firstName} ${this.state.offer.buyer.lastName}`}>
                            {this.state.buyer.map((team) => <option value={`${team.firstName} ${team.lastName}`}>{`${team.firstName} ${team.lastName}`}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Продавец</span>
                        <select onChange={(evt) => { this.handleInputChangeSeller(evt) }} defaultValue={`${this.state.offer.seller.firstName} ${this.state.offer.seller.lastName}`}>
                            {this.state.seller.map((team) => <option value={`${team.firstName} ${team.lastName}`}>{`${team.firstName} ${team.lastName}`}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Доставка</span>
                        <select onChange={(evt) => { this.handleInputChangeDelivery(evt) }} defaultValue={this.state.offer.delivery != null ? this.state.offer.delivery.address.fullName : ''}>
                            {this.state.delivery.map((team) => <option key={team.address.fullName} value={team.address.fullName}>{team.address.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Сумма заказа</span>
                        <input type="text" onChange={(evt) => { this.handleInputChangeSum(evt) }} defaultValue={that.state.offer != null ? that.state.offer.sum : ''}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <button className="btn-content" onClick={(evt) => { this.handleDeleteButton(evt) }}>Delete</button>
                <Link to="/index/Offer"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}