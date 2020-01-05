import React from 'react';
import Store from '../../../domain/Store';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps {
    id: string;
}

interface StoreEditProps extends RouteComponentProps<MatchProps> {
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
            id: parseInt(props.match.params.id),
            store: new Store(0, '', new Address(0, ''), new Date()),
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

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Store');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Store');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.store));
    }

    handleInputChangeName(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStore: Store = this.state.store;
        oldStore.name = value;
        this.setState({
            store: oldStore,
        });
    }

    handleInputChangeAddress(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStore: Store = this.state.store;
        oldStore.address.fullName = value;
        this.setState({
            store: oldStore,
        });
    }

    handleInputChangeYear(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStore: Store = this.state.store;
        oldStore.foundationDate = value;
        this.setState({
            store: oldStore,
        });
    }

    handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Store/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Store');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }

    public render() {
        let that: StoreEdit = this;
        return (
            <div className="StoreEdit">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeName(evt)}} defaultValue={that.state.store != null ? that.state.store.name : ''}></input>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <select onChange={(evt) =>{this.handleInputChangeAddress(evt)}} defaultValue={this.state.store.address.fullName}>
                            {this.state.address.map((team) => <option value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Год открытия</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeYear(evt)}} defaultValue={that.state.store != null ? that.state.store.foundationDate.toString() : ''}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/Store"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}