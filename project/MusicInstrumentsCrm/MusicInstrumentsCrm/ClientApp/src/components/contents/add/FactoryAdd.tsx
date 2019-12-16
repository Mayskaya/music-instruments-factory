import React from 'react';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';
import Factory from '../../../domain/Factory';

interface FactoryAddProps extends RouteComponentProps{

}

interface FactoryAddState {
    address: Array<Address>;
    factory: Factory;
}

export default class FactoryAdd extends React.Component<FactoryAddProps, FactoryAddState> {

    constructor(props: FactoryAddProps) {
        super(props);
        this.state = {
            address: new Array(),
            factory: new Factory(0, "", new Address(0, ""), new Date()),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Factory/');
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

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Factory');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Factory');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.factory));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            factory: value,
        });
    }

    public render() {
        return (
            <div className="FactoryAdd">
                <form className="form-add">
                    <label>
                        <span>Адрес</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.address.map((team) => <option key={team.fullName} value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Название</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Год основания</span>
                        <input type="Date" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Factory"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}