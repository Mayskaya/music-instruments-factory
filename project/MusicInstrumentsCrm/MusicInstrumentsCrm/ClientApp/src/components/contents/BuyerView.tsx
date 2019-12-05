import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Buyer from "../../domain/Buyer";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface BuyerViewProps extends RouteComponentProps {

}

export interface BuyerViewState {
    buyerList: Array<Buyer>;
}

export default class BuyerView extends React.Component<BuyerViewProps, BuyerViewState> {

    constructor(props: BuyerViewProps) {
        super(props, {});
        this.state = {
            buyerList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Buyer');
        xhr.onload = (evt) => {
            let res: Array<Buyer> = JSON.parse(xhr.responseText);
            this.setState({ buyerList: res })
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
            this.props.history.push(`/index/Buyer/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/BuyerAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>

                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Отчество</th>
                        <th>Эл. почта</th>
                        <th>Телефон</th>
                    </tr>
                    {
                        this.state.buyerList.map((el: Buyer) => {
                            return <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
                                <td>{el.id}</td>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.patronymic}</td>
                                <td>{el.email}</td>
                                <td>{el.phone}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}