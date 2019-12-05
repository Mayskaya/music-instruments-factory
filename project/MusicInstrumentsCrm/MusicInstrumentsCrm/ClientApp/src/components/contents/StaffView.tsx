import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Staff from "../../domain/Staff";
import HttpMethod from "../../util/http/HttpMethods";
import { Strings } from '../../util/Strings';

export interface StaffViewProps extends RouteComponentProps {

}

export interface StaffViewState {
    staffList: Array<Staff>;
}

export default class StaffView extends React.Component<StaffViewProps, StaffViewState> {

    constructor(props: StaffViewProps) {
        super(props, {});
        this.state = {
            staffList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Staff');
        xhr.onload = (evt) => {
            let res: Array<Staff> = JSON.parse(xhr.responseText);
            this.setState({ staffList: res })
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
            this.props.history.push(`/index/Staff/edit/${id}`);
        }
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/StaffAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>
                <table className="table-content">
                    <tr>
                        <th>ID</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Отчество</th>
                        <th>Серия паспорта</th>
                        <th>Номер паспорта</th>
                        <th>ИНН</th>
                        <th>СНИЛС</th>
                    </tr>
                    {
                        this.state.staffList.map((el: Staff) => {
                            return <tr data-id={el.id} onClick={(evt) => { this.handleRowClick(evt); }}>
                                <td>{el.id}</td>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.patronymic}</td>
                                <td>{el.passportSerial}</td>
                                <td>{el.passportNumber}</td>
                                <td>{el.inn}</td>
                                <td>{el.snils}</td>
                            </tr>
                        })
                    }
                </table></div>
        );
    }
}