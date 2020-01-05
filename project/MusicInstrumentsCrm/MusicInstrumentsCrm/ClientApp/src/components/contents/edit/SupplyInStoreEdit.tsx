import React from 'react';
import SupplyInStore from '../../../domain/SupplyInStore';
import Good from '../../../domain/Good';
import GoodType from '../../../domain/GoodType';
import Factory from '../../../domain/Factory';
import Address from '../../../domain/Address';
import Store from '../../../domain/Store';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps{
    id: string;
}

interface SupplyInStoreEditProps extends RouteComponentProps<MatchProps>{
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
            id: parseInt(props.match.params.id), 
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

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/SupplyInStore');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/SupplyInStore');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.supplyinstore));
    }

    handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/SupplyInStore/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/SupplyInStore');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }

    handleInputChangeGood(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldSup: SupplyInStore = this.state.supplyinstore;
        oldSup.good.name = value;
        this.setState({
            supplyinstore: oldSup,
        });
      }
      handleInputChangeStore(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldSup: SupplyInStore = this.state.supplyinstore;
        oldSup.store.name = value;
        this.setState({
            supplyinstore: oldSup,
        });
      }
      handleInputChangeDate(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldSup: SupplyInStore = this.state.supplyinstore;
        oldSup.date = value;
        this.setState({
            supplyinstore: oldSup,
        });
      }

    public render() {
        let that: SupplyInStoreEdit = this;
        return (
            <div className="SupplyInStoreEdit">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <select onChange={(evt) =>{this.handleInputChangeGood(evt)}} defaultValue={this.state.supplyinstore.good.name}>
                            {this.state.good.map((team) => <option value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Магазин</span>
                        <select onChange={(evt) =>{this.handleInputChangeStore(evt)}} defaultValue={this.state.supplyinstore.store.name}>
                            {this.state.store.map((team) => <option id='value1' value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Дата поставки</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeDate(evt)}} defaultValue={ that.state.supplyinstore != null ? that.state.supplyinstore.date.toString(): '' }></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/SupplyInStore"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}