import React from 'react';
import { Link } from 'react-router-dom';
import Store from "../../domain/Store";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';


export interface StoreViewState {
    storeList: Array<Store>;
}

export default class StoreView extends React.Component<{}, StoreViewState> {

    constructor() {
        super({}, {});
        this.state = {
            storeList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Store');
        xhr.onload = (evt)=>{
            let res: Array<Store> = JSON.parse(xhr.responseText);
            this.setState({storeList: res})
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
            window.history.pushState({}, "", `/index/Store/${id}`);
        }
    }
    
    public render() {
        return (
            <div className="content-view">
                <Link to="/index/StoreAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Адрес</th>
                        <th>Год открытия</th>
                    </tr>
                    {
                        this.state.storeList.map((el: Store) => {
                            return <tr data-id={el.id} onClick={this.handleRowClick}>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.address.fullName}</td>
                                <td>{el.foundationDate}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}