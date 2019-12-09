import React from 'react';
import Store from '../../../domain/Store';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface StoreEditProps {
    match: { params: { id: any; }; };
}

interface StoreEditState {
    id: number;
    store: Store;
    address: Array<Address>;
}

export default class StoreEdit extends React.Component<StoreEditProps, StoreEditState> {

constructor(props: StoreEditProps) {
        super(props);
        this.state = { 
            id: props.match.params.id, 
            store: new Store(0,'',new Address(0,''), new Date()),
            address: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Store/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Store = JSON.parse(xhr.responseText);
            this.setState({ store: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

        let xhrAd = new XMLHttpRequest();
        xhrAd.open(HttpMethod.GET, 'http://localhost/api/v1/Address/');
        xhrAd.onload = (evt) => {
            let res: Array<Address> = JSON.parse(xhrAd.responseText);
            this.setState({ address: res });
        };
        xhrAd.onerror = (evt) => {
            alert("error");
        };
        xhrAd.send();
    }
    
    public render() {
        let that: StoreEdit = this;
        return (
            <div className="StoreEdit">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" value={ that.state.store != null ? that.state.store.name: '' }></input>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <select value={this.state.store.address.fullName}>
                            {this.state.address.map((team) => <option value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Год открытия</span>
                        <input type="text" value={ that.state.store != null ? that.state.store.foundationDate.toString(): '' }></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <button className="btn-content">Delete</button>
                <Link to="/index/Store"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}