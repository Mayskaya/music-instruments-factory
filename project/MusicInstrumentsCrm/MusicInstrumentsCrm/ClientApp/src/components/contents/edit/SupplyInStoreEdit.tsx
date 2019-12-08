import React from 'react';
import SupplyInStore from '../../../domain/SupplyInStore';
import Good from '../../../domain/Good';
import GoodType from '../../../domain/GoodType';
import Factory from '../../../domain/Factory';
import Address from '../../../domain/Address';
import Store from '../../../domain/Store';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface SupplyInStoreEditProps {
    match: { params: { id: any; }; };
}

interface SupplyInStoreEditState {
    id: number;
    supplyinstore: SupplyInStore;
}

export default class SupplyInStoreEdit extends React.Component<SupplyInStoreEditProps, SupplyInStoreEditState> {

constructor(props: SupplyInStoreEditProps) {
        super(props);
        this.state = { id: props.match.params.id, supplyinstore: new SupplyInStore(0,new Good(0,'','',new GoodType(0,''),new Factory(0,'',new Address(0,''), new Date()),0), new Store(0,'',new Address(0,''), new Date()),new Date())};
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/SupplyInStore/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: SupplyInStore = JSON.parse(xhr.responseText);
            this.setState({ supplyinstore: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        let that: SupplyInStoreEdit = this;
        return (
            <div className="SupplyInStoreEdit">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <input type="text" value={ that.state.supplyinstore != null ? that.state.supplyinstore.good.name: '' }></input>
                    </label>
                    <label>
                        <span>Магазин</span>
                        <input type="text" value={ that.state.supplyinstore != null ? that.state.supplyinstore.store.name: '' }></input>
                    </label>
                    <label>
                        <span>Дата поставки</span>
                        <input type="text" value={ that.state.supplyinstore != null ? that.state.supplyinstore.date.toString(): '' }></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/SupplyInStore"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}