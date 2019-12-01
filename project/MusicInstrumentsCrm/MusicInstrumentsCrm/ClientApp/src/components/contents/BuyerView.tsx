import React from 'react';
import { Link } from 'react-router-dom';
import Buyer from "../../domain/Buyer";
import HttpMethod from "../../util/http/HttpMethods";

export interface BuyerViewState {
    buyerList: Array<Buyer>;
}

export default class BuyerView extends React.Component<{}, BuyerViewState> {

    constructor() {
        super({}, {});
        this.state = {
            buyerList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Buyer');
        xhr.onload = (evt)=>{
            let res: Array<Buyer> = JSON.parse(xhr.responseText);
            this.setState({buyerList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
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
                            return <tr>
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