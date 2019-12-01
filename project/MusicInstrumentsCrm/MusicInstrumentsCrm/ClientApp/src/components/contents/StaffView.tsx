import React from 'react';
import { Link } from 'react-router-dom';
import Staff from "../../domain/Staff";
import HttpMethod from "../../util/http/HttpMethods";


export interface StaffViewState {
    staffList: Array<Staff>;
}


export default class StaffView extends React.Component<{}, StaffViewState> {

    constructor() {
        super({}, {});
        this.state = {
            staffList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Staff');
        xhr.onload = (evt)=>{
            let res: Array<Staff> = JSON.parse(xhr.responseText);
            this.setState({staffList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
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
                            return <tr>
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