import React from 'react';
import Factory from '../../../domain/Factory';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';
import Address from '../../../domain/Address';

interface FactoryEditProps {
    match: { params: { id: any; }; };
}

interface FactoryEditState {
    id: number;
    factory: Factory;
    address: Array<Address>;
}

export default class FactoryEdit extends React.Component<FactoryEditProps, FactoryEditState> {

    constructor(props: FactoryEditProps) {
        super(props);
        this.state = { 
            id: props.match.params.id, 
            factory: new Factory(0, "", new Address(0, ""), new Date()),
            address: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Factory/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Factory = JSON.parse(xhr.responseText);
            this.setState({ factory: res });
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
        let that: FactoryEdit = this;
        return (
            <div className="FactoryEdit">
                <form className="form-add">
                    <label>
                        <span>Адрес</span>
                        <select value={this.state.factory.address.fullName}>
                            {this.state.address.map((team) => <option key={team.fullName} value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Название</span>
                        <input type="text" value={that.state.factory != null ? that.state.factory.name : ''}></input>
                    </label>
                    <label>
                        <span>Год основания</span>
                        <input type="text" value={that.state.factory != null ? that.state.factory.foundationDate.toString() : ''}></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <button className="btn-content">Delete</button>
                <Link to="/index/Factory"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}