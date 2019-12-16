import React from 'react';
import Car from '../../../domain/Car';
import Address from '../../../domain/Address';
import Staff from '../../../domain/Staff';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface DeliveryEditState {
    car: Array<Car>;
    address: Array<Address>;
    staff: Array<Staff>;
}

export default class DeliveryAdd extends React.Component<{}, DeliveryEditState> {

    constructor() {
        super({});
        this.state = {
            car: new Array(),
            address: new Array(),
            staff: new Array(),
        };
    }

    componentDidMount() {
        let xhrC = new XMLHttpRequest();
        xhrC.open(HttpMethod.GET, 'http://localhost/api/v1/Car/');
        xhrC.onload = (evt) => {
            let res: Array<Car> = JSON.parse(xhrC.responseText);
            this.setState({ car: res });
        };
        xhrC.onerror = (evt) => {
            alert("error");
        };
        xhrC.send();

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

        let xhrS = new XMLHttpRequest();
        xhrS.open(HttpMethod.GET, 'http://localhost/api/v1/Staff/');
        xhrS.onload = (evt) => {
            let res: Array<Staff> = JSON.parse(xhrS.responseText);
            this.setState({ staff: res });
        };
        xhrS.onerror = (evt) => {
            alert("error");
        };
        xhrS.send();
    }

    public render() {
        return (
            <div className="DeliveryAdd">
                <form className="form-add">
                    <label>
                        <span>Машина</span>
                        <select>
                            {this.state.car.map((team) => <option value={`${team.serial} ${team.region}`}>{`${team.serial} ${team.region}`}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <select>
                            {this.state.address.map((team) => <option value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Курьер</span>
                        <select>
                            {this.state.staff.map((team) => <option value={`${team.firstName} ${team.lastName}`}>{`${team.firstName} ${team.lastName}`}</option>)}
                        </select>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Delivery"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}