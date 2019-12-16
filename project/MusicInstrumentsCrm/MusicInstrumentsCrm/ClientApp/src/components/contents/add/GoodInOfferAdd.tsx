import React from 'react';
import Good from '../../../domain/Good';
import Offer from '../../../domain/Offer';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface GoodInOfferEditState {
    good: Array<Good>;
    offer: Array<Offer>;
}

export default class GoodInOfferAdd extends React.Component<{}, GoodInOfferEditState> {

    constructor() {
        super({});
        this.state = {
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

    public render() {
        return (
            <div className="GoodInOfferAdd">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <select>
                            {this.state.good.map((team) => <option value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Заказ</span>
                        <select>
                            {this.state.offer.map((team) => <option value={team.code}>{team.code}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Количество</span>
                        <input type=""></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/GoodInOffer"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}