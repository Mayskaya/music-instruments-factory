import React from 'react';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface FactoryEditState {
    address: Array<Address>;
}

export default class FactoryAdd extends React.Component<{}, FactoryEditState> {

    constructor() {
        super({});
        this.state = {
            address: new Array(),
        };
    }

    componentDidMount() {
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
        return (
            <div className="FactoryAdd">
                <form className="form-add">
                    <label>
                        <span>Адрес</span>
                        <select>
                            {this.state.address.map((team) => <option key={team.fullName} value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Название</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Год основания</span>
                        <input type=""></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Factory"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}