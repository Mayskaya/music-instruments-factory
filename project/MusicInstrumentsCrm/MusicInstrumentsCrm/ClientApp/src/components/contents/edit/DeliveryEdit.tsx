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
}
export default class DeliveryEdit extends React.Component<DeliveryEditProps, DeliveryEditState> {

    constructor(props: DeliveryEditProps) {
        super(props);
        this.state = { id: props.match.params.id, delivery: new Delivery(0, new Car(0, '', '', new Model(0, '', new Mark(0, '', new Country(0, '')), new Date())), new Address(0, ''), new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true))) };
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
    }

    public render() {
        let that: DeliveryEdit = this;
        return (
            <div className="DeliveryAdd">
                <form className="form-add">
                    <label>
                        <span>Машина</span>
                    </label>
                    <label>
                        <span>Номер</span>
                        <input type="text" value={that.state.delivery != null ? that.state.delivery.car.serial : ''}></input>
                    </label>
                    <label>
                        <span>Регион</span>
                        <input type="text" value={that.state.delivery != null ? that.state.delivery.car.region : ''}></input>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <input type="text" value={that.state.delivery != null ? that.state.delivery.address.fullName : ''}></input>
                    </label>
                    <label>
                        <span>Курьер</span>
                    </label>
                    <label>
                        <span>Имя</span>
                        <input type="text" value={that.state.delivery != null ? that.state.delivery.courier.firstName : ''}></input>
                    </label>
                    <label>
                        <span>Фамилия</span>
                        <input type="text" value={that.state.delivery != null ? that.state.delivery.courier.lastName : ''}></input>
                    </label>

                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Delivery"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}