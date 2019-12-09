import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import GoodInOffer from "../../domain/GoodInOffer";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface GoodInOfferViewProps extends RouteComponentProps {

}

export interface GoodInOfferViewState {
    goodInOfferList: Array<GoodInOffer>;
}

export default class GoodInOfferView extends React.Component<GoodInOfferViewProps, GoodInOfferViewState> {

    constructor(props: GoodInOfferViewProps) {
        super(props, {});
        this.state = {
            goodInOfferList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/GoodInOffer');
        xhr.onload = (evt) => {
            let res: Array<GoodInOffer> = JSON.parse(xhr.responseText);
            this.setState({ goodInOfferList: res })
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
            this.props.history.push(`/index/GoodInOffer/edit/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/GoodInOfferAdd"><button className="btn-content">Add</button></Link>
                
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Товар</th>
                        <th>Заказ</th>
                        <th>Количество</th>
                    </tr>
                    {
                        this.state.goodInOfferList.map((el: GoodInOffer) => {
                            return <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
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