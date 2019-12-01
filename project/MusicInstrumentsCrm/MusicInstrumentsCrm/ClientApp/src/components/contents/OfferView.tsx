import React from 'react';
import { Link } from 'react-router-dom';
import Offer from "../../domain/Offer";
import HttpMethod from "../../util/http/HttpMethods";


export interface OfferViewState {
    offerList: Array<Offer>;
}

export default class OfferView extends React.Component<{}, OfferViewState> {

    constructor() {
        super({}, {});
        this.state = {
            offerList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Offer');
        xhr.onload = (evt)=>{
            let res: Array<Offer> = JSON.parse(xhr.responseText);
            this.setState({offerList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/OfferAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Код заказа</th>
                        <th>Покупатель</th>
                        <th>Продавец</th>
                        <th>Доставка</th>
                        <th>Сумма заказа</th>
                    </tr>
                    {
                        this.state.offerList.map((el: Offer) => {
                            return <tr>
                                <td>{el.id}</td>
                                <td>{el.code}</td>
                                <td>{`${el.buyer.lastName} ${el.buyer.firstName}`}</td>
                                <td>{`${el.seller.lastName} ${el.seller.firstName}`}</td>
                                <td>{el.delivery.address.id}</td>
                                <td>{el.sum}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}