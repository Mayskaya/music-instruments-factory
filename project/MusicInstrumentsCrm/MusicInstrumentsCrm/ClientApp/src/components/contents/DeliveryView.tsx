import React from 'react';
import { Link } from 'react-router-dom';
import Delivery from "../../domain/Delivery";
import Address from '../../domain/Address';
import HttpMethod from "../../util/http/HttpMethods";


export interface DeliveryViewState {
    deliveryList: Array<Delivery>;
    addressList: Array<Address>;
}


export default class DeliveryView extends React.Component<{}, DeliveryViewState> {

    constructor() {
        super({}, {});
        this.state = {
            deliveryList: new Array(),
            addressList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Delivery');
        xhr.onload = (evt) => {
            // debugger;
            let res: Array<Delivery> = JSON.parse(xhr.responseText);
            this.setState({ deliveryList: res })
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/DeliveryAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Машина</th>
                        <th>Адрес</th>
                        <th>Курьер</th>
                    </tr>
                    {
                        this.state.deliveryList.map((el: Delivery) => {
                            return <tr>
                                <td>{el.id}</td>
                                <td>{`${el.car.serial} ${el.car.region}`}</td>
                                <td>{el.address.fullName}</td>
                                <td>{`${el.courier.lastName} ${el.courier.firstName}`}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}