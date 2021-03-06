import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Offer from "../../domain/Offer";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface OfferViewProps extends RouteComponentProps {

}

export interface OfferViewState {
    offerList: Array<Offer>;
}

export default class OfferView extends React.Component<OfferViewProps, OfferViewState> {

    constructor(props: OfferViewProps) {
        super(props, {});
        this.state = {
            offerList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Offer');
        xhr.onload = (evt) => {
            // debugger;
            let res: Array<Offer> = JSON.parse(xhr.responseText);
            this.setState({ offerList: res })
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
            this.props.history.push(`/index/Offer/edit/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/OfferAdd"><button className="btn-content">Add</button></Link>
                
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
                            let del: string;
                            if (el.delivery != null) { del = el.delivery.address.fullName } else { del = 'null' }
                            return <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
                                <td>{el.id}</td>
                                <td>{el.code}</td>
                                <td>{`${el.buyer.lastName} ${el.buyer.firstName}`}</td>
                                <td>{`${el.seller.lastName} ${el.seller.firstName}`}</td>
                                <td>{del}</td>
                                <td>{el.sum}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}