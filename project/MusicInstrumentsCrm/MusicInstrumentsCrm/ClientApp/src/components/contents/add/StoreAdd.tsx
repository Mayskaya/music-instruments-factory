import React from 'react';
import Store from '../../../domain/Store';
import { RouteComponentProps } from 'react-router';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface StoreAddProps extends RouteComponentProps {
}

interface StoreAddState {
    store: Store;
    address: Array<Address>;
}


export default class StoreAdd extends React.Component<StoreAddProps, StoreAddState> {
    constructor(props: StoreAddProps) {
        super(props);
        this.state = {
            store: new Store(0, '', new Address(0, ''), new Date()),
            address: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Store');
        xhr.onload = (evt) => {
            let resm: Store = JSON.parse(xhr.responseText);
            this.setState({ store: resm })
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

        let xhrMo = new XMLHttpRequest();
        xhrMo.open(HttpMethod.GET, 'http://localhost/api/v1/Address');
        xhrMo.onload = (evt) => {
            let res: Array<Address> = JSON.parse(xhrMo.responseText);
            this.setState({ address: res });
        };
        xhrMo.onerror = (evt) => {
            alert("error");
        };
        xhrMo.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Store');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Store');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.store));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            store: value,
        });
    }

    public render() {
        return (
            <div className="StoreAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                    <span>Адрес</span>
                        <select onChange={(evt) =>{this.handleInputChange(evt)}}>
                            {this.state.address.map((team) => <option value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Год открытия</span>
                        <input type="number" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Store"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}