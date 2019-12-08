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

interface GoodInOfferEditProps {
    match: { params: { id: any; }; };
}

interface GoodInOfferEditState {
    id: number;
    goodinoffer: GoodInOffer;
}

export default class GoodInOfferEdit extends React.Component<GoodInOfferEditProps, GoodInOfferEditState> {

    constructor(props: GoodInOfferEditProps) {
        super(props);
        this.state = { id: props.match.params.id, goodinoffer: new GoodInOffer(0,new Good(0,'','',new GoodType(0,''),new Factory(0,'',new Address(0,''),new Date()),0),new Offer(0,'',new Buyer(0,'','','','','',new User(0,'','',new Date(),new Date(),true)),new Staff(0,'','','','','','','',new User(0,'','',new Date(),new Date(),true)),new Delivery(0,new Car(0,'','',new Model(0,'',new Mark(0,'',new Country(0,'')),new Date())), new Address(0,''),new Staff(0,'','','','','','','',new User(0,'','',new Date(),new Date(),true))),0),0) };
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
    }

    public render() {
        let that: GoodInOfferEdit = this;
        return (
            <div className="GoodInOfferEdit">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <input type="text" value={ that.state.goodinoffer != null ? that.state.goodinoffer.good.name: '' }></input>
                    </label>
                    <label>
                        <span>Заказ</span>
                        <input type="text" value={ that.state.goodinoffer != null ? that.state.goodinoffer.offer.code: '' }></input>
                    </label>
                    <label>
                        <span>Количество</span>
                        <input type="text" value={ that.state.goodinoffer != null ? that.state.goodinoffer.count: '' }></input>
                    </label>
                </form>
            </div>
        );
    }
}