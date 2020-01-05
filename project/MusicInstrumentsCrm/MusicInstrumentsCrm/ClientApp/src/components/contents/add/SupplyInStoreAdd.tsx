import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import SupplyInStore from '../../../domain/SupplyInStore';
import Good from '../../../domain/Good';
import Store from '../../../domain/Store';
import GoodType from '../../../domain/GoodType';
import Factory from '../../../domain/Factory';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';

interface SupplyInStoreAddProps extends RouteComponentProps {
}

interface SupplyInStoreAddState {
    supplyinstore: SupplyInStore;
    good: Array<Good>;
    store: Array<Store>;
}


export default class SupplyInStoreAdd extends React.Component<SupplyInStoreAddProps, SupplyInStoreAddState> {

    constructor(props: SupplyInStoreAddProps) {
        super(props);
        this.state = {
            supplyinstore: new SupplyInStore(0, new Good(0, '', '', new GoodType(0, ''), new Factory(0, '', new Address(0, ''), new Date()), 0), new Store(0, '', new Address(0, ''), new Date()), new Date()),
            good: new Array(),
            store: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/SupplyInStore');
        xhr.onload = (evt) => {
            let res: SupplyInStore = JSON.parse(xhr.responseText);
            this.setState({ supplyinstore: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

        let xhrG = new XMLHttpRequest();
        xhrG.open(HttpMethod.GET, 'http://localhost/api/v1/Good');
        xhrG.onload = (evt) => {
            let res: Array<Good> = JSON.parse(xhrG.responseText);
            this.setState({ good: res });
        };
        xhrG.onerror = (evt) => {
            alert("error");
        };
        xhrG.send();

        let xhrS = new XMLHttpRequest();
        xhrS.open(HttpMethod.GET, 'http://localhost/api/v1/Store');
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
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/SupplyInStore');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/SupplyInStore');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.supplyinstore));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            supplyinstore: value,
        });
    }

    public render() {
        return (
            <div className="SupplyInStoreAdd">
                <form className="form-add">
                    <label>
                        <span>Товар</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.good.map((team) => <option value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Магазин</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.store.map((team) => <option id='value1' value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Дата поставки</span>
                        <input type="date" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/SupplyInStore"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}