import React from 'react';
import Car from '../../../domain/Car';
import Address from '../../../domain/Address';
import Staff from '../../../domain/Staff';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';
import Delivery from '../../../domain/Delivery';
import User from '../../../domain/User';
import Country from '../../../domain/Country';
import Mark from '../../../domain/Mark';
import Model from '../../../domain/Model';

interface DeliveryAddProps extends RouteComponentProps {

}

interface DeliveryEditState {
    car: Array<Car>;
    address: Array<Address>;
    staff: Array<Staff>;
    delivery: Delivery;
}

export default class DeliveryAdd extends React.Component<DeliveryAddProps, DeliveryEditState> {

    constructor(props: DeliveryAddProps) {
        super(props);
        this.state = {
            car: new Array(),
            address: new Array(),
            staff: new Array(),
            delivery: new Delivery(0, new Car(0, '', '', new Model(0, '', new Mark(0, '', new Country(0, '')), new Date())), new Address(0, ''), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true))),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Delivery/');
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

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Delivery');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Delivery');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.car));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            car: value,
        });
    }

    public render() {
        return (
            <div className="DeliveryAdd">
                <form className="form-add">
                    <label>
                        <span>Машина</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.car.map((team) => <option value={`${team.serial} ${team.region}`}>{`${team.serial} ${team.region}`}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.address.map((team) => <option value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Курьер</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.staff.map((team) => <option value={`${team.firstName} ${team.lastName}`}>{`${team.firstName} ${team.lastName}`}</option>)}
                        </select>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Delivery"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}