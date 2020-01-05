import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Staff from '../../../domain/Staff';
import User from '../../../domain/User';
import HttpMethod from '../../../util/http/HttpMethods';

interface StaffAddProps extends RouteComponentProps {
}

interface StaffAddState {
    staff: Staff;
}

export default class StaffAdd extends React.Component<StaffAddProps, StaffAddState> {

    constructor(props: StaffAddProps) {
        super(props);
        this.state = {
            staff: new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true))
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Staff');
        xhr.onload = (evt) => {
            let resm: Staff = JSON.parse(xhr.responseText);
            this.setState({ staff: resm })
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Staff');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Staff');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.staff));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            staff: value,
        });
    }

    public render() {
        return (
            <div className="StaffAdd">
                <form className="form-add">
                    <label>
                        <span>Имя</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Фамилия</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Отчество</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Серия паспорта</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Номер паспорта</span>
                        <input type="number" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>ИНН</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>СНИЛС</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Staff"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}