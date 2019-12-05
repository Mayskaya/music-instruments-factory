import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Good from "../../domain/Good";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface GoodViewProps extends RouteComponentProps {
}

export interface GoodViewState {
    goodList: Array<Good>;
}

export default class GoodView extends React.Component<GoodViewProps, GoodViewState> {

    constructor(props: GoodViewProps) {
        super(props);
        debugger;
        this.state = {
            goodList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Good');
        xhr.onload = (evt) => {
            let res: Array<Good> = JSON.parse(xhr.responseText);
            this.setState({ goodList: res })
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
            this.props.history.push(`/index/Good/edit/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/GoodAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Тип</th>
                        <th>Производитель</th>
                        <th>Цена</th>
                    </tr>
                    {
                        this.state.goodList.map((el: Good) => {
                            return (
                                <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
                                    <td>{el.id}</td>
                                    <td>{el.name}</td>
                                    <td>{el.description}</td>
                                    <td>{el.goodType.typeName}</td>
                                    <td>{el.factory.name}</td>
                                    <td>{el.price}</td>
                                </tr>);
                        })
                    }
                </table>
            </div>
        );
    }
}