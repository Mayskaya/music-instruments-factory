import React from 'react';
import Delivery from '../../../domain/Delivery';
import Car from '../../../domain/Car';
import Model from '../../../domain/Model';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import Address from '../../../domain/Address';
import Staff from '../../../domain/Staff';
import User from '../../../domain/User';
import { Link } from 'react-router-dom';
import HttpMethod from '../../../util/http/HttpMethods';

interface DeliveryEditProps {
    match: { params: { id: any; }; };
}

interface DeliveryEditState {
    id: number;
    delivery: Delivery;
    car: Array<Car>;
    address: Array<Address>;
    staff: Array<Staff>;
}
export default class DeliveryEdit extends React.Component<DeliveryEditProps, DeliveryEditState> {

    constructor(props: DeliveryEditProps) {
        super(props);
        this.state = {
            id: props.match.params.id,
            delivery: new Delivery(0, new Car(0, '', '', new Model(0, '', new Mark(0, '', new Country(0, '')), new Date())), new Address(0, ''), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true))),
            car: new Array(),
            address: new Array(),
            staff: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Delivery/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Delivery = JSON.parse(xhr.responseText);
            this.setState({ delivery: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

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
        let that: DeliveryEdit = this;
        return (
            <div className="DeliveryAdd">
                <form className="form-add">
                    <label>
                        <span>Машина</span>
                        <select value={`${this.state.delivery.car.serial} ${this.state.delivery.car.region}`}>
                            {this.state.car.map((team) => <option value={`${team.serial} ${team.region}`}>{`${team.serial} ${team.region}`}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <select value={this.state.delivery.address.fullName}>
                            {this.state.address.map((team) => <option value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Курьер</span>
                        <select value={`${this.state.delivery.courier.firstName} ${this.state.delivery.courier.lastName}`}>
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