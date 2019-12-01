import React from 'react';
import { Link } from 'react-router-dom';
import GoodInOffer from "../../domain/GoodInOffer";
import HttpMethod from "../../util/http/HttpMethods";


export interface GoodInOfferViewState {
    goodInOfferList: Array<GoodInOffer>;
}

export default class GoodInOfferView extends React.Component<{}, GoodInOfferViewState> {

    constructor() {
        super({}, {});
        this.state = {
            goodInOfferList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/GoodInOffer');
        xhr.onload = (evt)=>{
            let res: Array<GoodInOffer> = JSON.parse(xhr.responseText);
            this.setState({goodInOfferList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/GoodInOfferAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Товар</th>
                        <th>Заказ</th>
                        <th>Количество</th>
                    </tr>
                    {
                        this.state.goodInOfferList.map((el: GoodInOffer) => {
                            return <tr>
                                <td>{el.id}</td>
                                <td>{el.good.name}</td>
                                <td>{el.offer.code}</td>
                                <td>{el.count}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}