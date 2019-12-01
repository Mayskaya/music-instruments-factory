import React from 'react';
import { Link } from 'react-router-dom';
import Factory from "../../domain/Factory";
import HttpMethod from "../../util/http/HttpMethods";


export interface FactoryViewState {
    factoryList: Array<Factory>;
}

export default class FactoryView extends React.Component<{}, FactoryViewState> {

    constructor() {
        super({}, {});
        this.state = {
            factoryList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Factory');
        xhr.onload = (evt)=>{
            let res: Array<Factory> = JSON.parse(xhr.responseText);
            this.setState({factoryList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/FactoryAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Адрес</th>
                        <th>Год основания</th>
                    </tr>
                    {
                        this.state.factoryList.map((el: Factory) => {
                            return <tr>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.address.fullName}</td>
                                <td>{el.foudationDate}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}