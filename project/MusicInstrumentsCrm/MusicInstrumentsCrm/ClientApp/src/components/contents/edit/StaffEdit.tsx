import React from 'react';
import Staff from '../../../domain/Staff';
import User from '../../../domain/User';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface StaffEditProps {
    match: { params: { id: any; }; };
}

interface StaffEditState {
    id: number;
    staff: Staff;
}

export default class StaffEdit extends React.Component<StaffEditProps, StaffEditState> {

    constructor(props: StaffEditProps) {
        super(props);
        this.state = { id: props.match.params.id, staff: new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)) };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Staff/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Staff = JSON.parse(xhr.responseText);
            this.setState({ staff: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        let that: StaffEdit = this;
        return (
            <div className="StaffEdit">
                <form className="form-add">
                    <label>
                        <span>Имя</span>
                        <input type="text" value={that.state.staff != null ? that.state.staff.firstName : ''}></input>
                    </label>
                    <label>
                        <span>Фамилия</span>
                        <input type="text" value={that.state.staff != null ? that.state.staff.lastName : ''}></input>
                    </label>
                    <label>
                        <span>Отчество</span>
                        <input type="text" value={that.state.staff != null ? that.state.staff.patronymic : ''}></input>
                    </label>
                    <label>
                        <span>Серия паспорта</span>
                        <input type="text" value={that.state.staff != null ? that.state.staff.passportSerial : ''}></input>
                    </label>
                    <label>
                        <span>Номер паспорта</span>
                        <input type="text" value={that.state.staff != null ? that.state.staff.passportNumber : ''}></input>
                    </label>
                    <label>
                        <span>ИНН</span>
                        <input type="text" value={that.state.staff != null ? that.state.staff.inn : ''}></input>
                    </label>
                    <label>
                        <span>СНИЛС</span>
                        <input type="text" value={that.state.staff != null ? that.state.staff.snils : ''}></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Staff"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}