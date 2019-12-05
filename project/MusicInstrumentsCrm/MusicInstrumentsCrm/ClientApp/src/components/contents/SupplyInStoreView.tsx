import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import SupplyInStore from "../../domain/SupplyInStore";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface SupplyInStoreViewProps extends RouteComponentProps {

}

export interface SupplyInStoreViewState {
    supplyInStoreList: Array<SupplyInStore>;
}

export default class SupplyInStoreView extends React.Component<SupplyInStoreViewProps, SupplyInStoreViewState> {

    constructor(props: SupplyInStoreViewProps) {
        super(props, {});
        this.state = {
            supplyInStoreList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/SupplyInStore');
        xhr.onload = (evt)=>{
            let res: Array<SupplyInStore> = JSON.parse(xhr.responseText);
            this.setState({supplyInStoreList: res})
        };
        xhr.onerror = (evt)=> {
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
            this.props.history.push(`/index/SupplyInStore/edit/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/SupplyInStoreAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Товар</th>
                        <th>Магазин</th>
                        <th>Дата поставки</th>
                    </tr>
                    {
                        this.state.supplyInStoreList.map((el: SupplyInStore) => {
                            return <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
                                <td>{el.id}</td>
                                <td>{el.good.name}</td>
                                <td>{el.store.name}</td>
                                <td>{el.date}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}