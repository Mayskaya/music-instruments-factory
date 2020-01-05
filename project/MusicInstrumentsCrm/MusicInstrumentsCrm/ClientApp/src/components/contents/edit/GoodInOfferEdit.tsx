import React from 'react';
import GoodInOffer from '../../../domain/GoodInOffer';
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
import Good from '../../../domain/Good';
import GoodType from '../../../domain/GoodType';
import Factory from '../../../domain/Factory';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps {
    id: string;
}

interface GoodInOfferEditProps extends RouteComponentProps<MatchProps> {
}

interface GoodInOfferEditState {
    id: number;
    goodinoffer: GoodInOffer;
    good: Array<Good>;
    offer: Array<Offer>;
}

export default class GoodInOfferEdit extends React.Component<GoodInOfferEditProps, GoodInOfferEditState> {

    constructor(props: GoodInOfferEditProps) {
        super(props);
        this.state = {
            id: parseInt(props.match.params.id),
            goodinoffer: new GoodInOffer(0, new Good(0, '', '', new GoodType(0, ''), new Factory(0, '', new Address(0, ''), new Date()), 0), new Offer(0, '', new Buyer(0, '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)), new Delivery(0, new Car(0, '', '', new Model(0, '', new Mark(0, '', new Country(0, '')), new Date())), new Address(0, ''), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true))), 0), 0),
            good: new Array(),
            offer: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/GoodInOffer/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: GoodInOffer = JSON.parse(xhr.responseText);
            this.setState({ goodinoffer: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

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
        xhrO.open(HttpMethod.GET, 'http://localhost/api/v1/Offer');
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
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/GoodInOffer');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/GoodInOffer');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.goodinoffer));
    }

    handleDeleteButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/GoodInOffer/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/GoodInOffer');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
    }

    handleInputChangeGood(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldGio: GoodInOffer = this.state.goodinoffer;
        oldGio.good.name = value;
        this.setState({
            goodinoffer: oldGio,
        });
    }
    handleInputChangeOffer(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldGio: GoodInOffer = this.state.goodinoffer;
        oldGio.offer.code = value;
        this.setState({
            goodinoffer: oldGio,
        });
    }
    handleInputChangeCount(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldGio: GoodInOffer = this.state.goodinoffer;
        oldGio.count = value;
        this.setState({
            goodinoffer: oldGio,
        });
    }

    public render() {
        let that: GoodInOfferEdit = this;
        return (
            <div className="GoodInOfferEdit">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <select onChange={(evt) => { this.handleInputChangeGood(evt) }} defaultValue={this.state.goodinoffer.good.name}>
                            {this.state.good.map((team) => <option value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Заказ</span>
                        <select onChange={(evt) => { this.handleInputChangeOffer(evt) }} defaultValue={this.state.goodinoffer.offer.code}>
                            {this.state.offer.map((team) => <option value={team.code}>{team.code}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Количество</span>
                        <input type="text" onChange={(evt) => { this.handleInputChangeCount(evt) }} defaultValue={that.state.goodinoffer != null ? that.state.goodinoffer.count : ''}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <button className="btn-content" onClick={(evt) => { this.handleDeleteButton(evt) }}>Delete</button>
                <Link to="/index/GoodInOffer"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}