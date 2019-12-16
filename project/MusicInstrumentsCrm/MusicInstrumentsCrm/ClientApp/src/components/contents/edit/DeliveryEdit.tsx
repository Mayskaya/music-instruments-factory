import React from 'react';
import Delivery from '../../../domain/Delivery';
import Car from '../../../domain/Car';
import Model from '../../../domain/Model';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import Address from '../../../domain/Address';
import Staff from '../../../domain/Staff';
import User from '../../../domain/User';
import { Link, RouteComponentProps } from 'react-router-dom';
import HttpMethod from '../../../util/http/HttpMethods';


interface MatchProps{
    id: string;
}

interface DeliveryEditProps extends RouteComponentProps<MatchProps> {
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
            id: parseInt(props.match.params.id),
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

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Delivery');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Delivery');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.delivery));
    }

    handleInputChangeSerial(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldDelivery: Delivery = this.state.delivery;
        oldDelivery.car.serial = value;
        this.setState({
            delivery: oldDelivery,
        });
      }
      handleInputChangeRegion(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldDelivery: Delivery = this.state.delivery;
        oldDelivery.car.region = value;
        this.setState({
            delivery: oldDelivery,
        });
      }
      handleInputChangeAddress(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldDelivery: Delivery = this.state.delivery;
        oldDelivery.address = value;
        this.setState({
            delivery: oldDelivery,
        });
      }
      handleInputChangeCourier(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldDelivery: Delivery = this.state.delivery;
        oldDelivery.courier = value;
        this.setState({
            delivery: oldDelivery,
        });
      }

      handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Delivery/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Delivery');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }

    public render() {
        let that: DeliveryEdit = this;
        return (
            <div className="DeliveryAdd">
                <form className="form-add">
                    <label>Машина</label>
                    <label>
                        <span>Номер</span>
                        <select onChange={(evt) =>{this.handleInputChangeSerial(evt)}} defaultValue={this.state.delivery.car.serial}>
                            {this.state.car.map((team) => <option value={team.serial}>{team.serial}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Регион</span>
                        <select onChange={(evt) =>{this.handleInputChangeRegion(evt)}} defaultValue={this.state.delivery.car.region}>
                            {this.state.car.map((team) => <option value={team.region}>{team.region}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <select onChange={(evt) =>{this.handleInputChangeAddress(evt)}} defaultValue={this.state.delivery.address.fullName}>
                            {this.state.address.map((team) => <option value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Курьер</span>
                        <select onChange={(evt) =>{this.handleInputChangeCourier(evt)}} defaultValue={`${this.state.delivery.courier.firstName} ${this.state.delivery.courier.lastName}`}>
                            {this.state.staff.map((team) => <option value={`${team.firstName} ${team.lastName}`}>{`${team.firstName} ${team.lastName}`}</option>)}
                        </select>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/Delivery"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}