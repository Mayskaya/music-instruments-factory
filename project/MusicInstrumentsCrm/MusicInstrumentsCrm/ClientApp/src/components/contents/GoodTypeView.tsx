import React from 'react';
import { Link } from 'react-router-dom';
import GoodType from "../../domain/GoodType";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';


export interface GoodTypeViewState {
    goodTypeList: Array<GoodType>;
}

export default class GoodTypeView extends React.Component<{}, GoodTypeViewState> {

    constructor() {
        super({}, {});
        this.state = {
            goodTypeList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/GoodType');
        xhr.onload = (evt)=>{
            let res: Array<GoodType> = JSON.parse(xhr.responseText);
            this.setState({goodTypeList: res})
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
            window.history.pushState({}, "", `/index/GoodType/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/GoodTypeAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название типа</th>
                    </tr>
                    {
                        this.state.goodTypeList.map((el: GoodType) => {
                            return <tr data-id={el.id} onClick={this.handleRowClick}>
                                <td>{el.id}</td>
                                <td>{el.typeName}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}