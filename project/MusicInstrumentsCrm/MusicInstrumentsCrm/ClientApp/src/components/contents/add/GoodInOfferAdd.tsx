import React from 'react';
import Good from '../../../domain/Good';
import Offer from '../../../domain/Offer';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';
import GoodInOffer from '../../../domain/GoodInOffer';
import GoodType from '../../../domain/GoodType';
import Factory from '../../../domain/Factory';
import Address from '../../../domain/Address';
import Buyer from '../../../domain/Buyer';
import User from '../../../domain/User';
import Staff from '../../../domain/Staff';
import Delivery from '../../../domain/Delivery';
import Car from '../../../domain/Car';
import Model from '../../../domain/Model';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';

interface GoodInOfferAddProps extends RouteComponentProps {
}

interface GoodInOfferAddState {
    goodinoffer: GoodInOffer;
    good: Array<Good>;
    offer: Array<Offer>;
}

export default class GoodInOfferAdd extends React.Component<GoodInOfferAddProps, GoodInOfferAddState> {

    constructor(props: GoodInOfferAddProps) {
        super(props);
        this.state = {
            goodinoffer: new GoodInOffer(0, new Good(0, '', '', new GoodType(0, ''), new Factory(0, '', new Address(0, ''), new Date()), 0), new Offer(0, '', new Buyer(0, '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)), new Delivery(0, new Car(0, '', '', new Model(0, '', new Mark(0, '', new Country(0, '')), new Date())), new Address(0, ''), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true))), 0), 0),
            good: new Array(),
            offer: new Array(),
        };
    }

    componentDidMount() {
        let xhrG = new XMLHttpRequest();
        xhrG.open(HttpMethod.GET, 'http://localhost/api/v1/Good/');
        xhrG.onload = (evt) => {
            let res: Array<Good> = JSON.parse(xhrG.responseText);
            this.setState({ good: res });
        };
        xhrG.onerror = (evt) => {
            alert("error");
        };
        xhrG.send();

        let xhrO = new XMLHttpRequest();
        xhrO.open(HttpMethod.GET, 'http://localhost/api/v1/Offer/');
        xhrO.onload = (evt) => {
            let res: Array<Offer> = JSON.parse(xhrO.responseText);
            this.setState({ offer: res });
        };
        xhrO.onerror = (evt) => {
            alert("error");
        };
        xhrO.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/GoodInOffer');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/GoodInOffer');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.goodinoffer));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            goodinoffer: value,
        });
    }

    public render() {
        return (
            <div className="GoodInOfferAdd">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.good.map((team) => <option value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Заказ</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.offer.map((team) => <option value={team.code}>{team.code}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Количество</span>
                        <input type="number" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/GoodInOffer"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}