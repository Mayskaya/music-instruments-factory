import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Factory from "../../domain/Factory";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface FactoryViewProps extends RouteComponentProps {

}

export interface FactoryViewState {
    factoryList: Array<Factory>;
}

export default class FactoryView extends React.Component<FactoryViewProps, FactoryViewState> {

    constructor(props: FactoryViewProps) {
        super(props, {});
        this.state = {
            factoryList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Factory');
        xhr.onload = (evt) => {
            let res: Array<Factory> = JSON.parse(xhr.responseText);
            this.setState({ factoryList: res });
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
            this.props.history.push(`/index/Factory/edit/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/FactoryAdd"><button className="btn-content">Add</button></Link>
                
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Адрес</th>
                        <th>Год основания</th>
                    </tr>
                    {
                        this.state.factoryList.map((el: Factory) => {
                            return <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
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