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
    good: Array<Good>;
    store: Array<Store>;
}

export default class SupplyInStoreEdit extends React.Component<SupplyInStoreEditProps, SupplyInStoreEditState> {

constructor(props: SupplyInStoreEditProps) {
        super(props);
        this.state = { 
            id: props.match.params.id, 
            supplyinstore: new SupplyInStore(0,new Good(0,'','',new GoodType(0,''),new Factory(0,'',new Address(0,''), new Date()),0), new Store(0,'',new Address(0,''), new Date()),new Date()),
            good: new Array(),
            store: new Array(),
        };
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

        let xhrS = new XMLHttpRequest();
        xhrS.open(HttpMethod.GET, 'http://localhost/api/v1/Store/');
        xhrS.onload = (evt) => {
            let res: Array<Store> = JSON.parse(xhrS.responseText);
            this.setState({ store: res });
        };
        xhrS.onerror = (evt) => {
            alert("error");
        };
        xhrS.send();
    }

    // saveBtn(event: React.MouseEvent){
    //     if(event.target)
    // }

    public render() {
        let that: SupplyInStoreEdit = this;
        return (
            <div className="SupplyInStoreEdit">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <select value={this.state.supplyinstore.good.name}>
                            {this.state.good.map((team) => <option value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Магазин</span>
                        <select value={this.state.supplyinstore.store.name}>
                            {this.state.store.map((team) => <option id='value1' value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Дата поставки</span>
                        <input type="text" value={ that.state.supplyinstore != null ? that.state.supplyinstore.date.toString(): '' }></input>
                    </label>
                </form>
                <button className="btn-content" >Save</button>
                {/* onClick={(evt)=>{this.saveBtn(evt)}} */}
                <Link to="/index/SupplyInStore"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}