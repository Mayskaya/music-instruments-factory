import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Delivery from "../../domain/Delivery";
import Address from '../../domain/Address';
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface DeliveryViewProps extends RouteComponentProps {

}

export interface DeliveryViewState {
    deliveryList: Array<Delivery>;
    addressList: Array<Address>;
}

export default class DeliveryView extends React.Component<DeliveryViewProps, DeliveryViewState> {

    constructor(props: DeliveryViewProps) {
        super(props, {});
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
    handleRowClick(event: React.MouseEvent) {
        let id: string | null = null;
        if (event.currentTarget != null) {
            id = event.currentTarget.getAttribute('data-id');
        }
        if (!Strings.isNullOrEmpty(id)) {
            this.props.history.push(`/index/Delivery/${id}`);
        }
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
                            return <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
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