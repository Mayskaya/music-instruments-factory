import React from 'react';
import Staff from '../../../domain/Staff';
import User from '../../../domain/User';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface MatchProps {
    id: string;
}

interface StaffEditProps extends RouteComponentProps<MatchProps>{
}

interface StaffEditState {
    id: number;
    staff: Staff;
}

export default class StaffEdit extends React.Component<StaffEditProps, StaffEditState> {

    constructor(props: StaffEditProps) {
        super(props);
        this.state = { 
            id: parseInt(props.match.params.id), 
            staff: new Staff(0, '', '', '', '', '', '', '', new User(0, '', '', new Date(), new Date(), true)) };
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

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Staff');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Staff');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.staff));
    }

    handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Staff/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Staff');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }

      handleInputChangeFirstName(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStaff: Staff = this.state.staff;
        oldStaff.firstName = value;
        this.setState({
            staff: oldStaff,
        });
      }
      handleInputChangeLastName(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStaff: Staff = this.state.staff;
        oldStaff.lastName = value;
        this.setState({
            staff: oldStaff,
        });
      }
      handleInputChangePatronymic(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStaff: Staff = this.state.staff;
        oldStaff.patronymic = value;
        this.setState({
            staff: oldStaff,
        });
      }
      handleInputChangeSerial(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStaff: Staff = this.state.staff;
        oldStaff.passportSerial = value;
        this.setState({
            staff: oldStaff,
        });
      }
      handleInputChangeNumber(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStaff: Staff = this.state.staff;
        oldStaff.passportNumber = value;
        this.setState({
            staff: oldStaff,
        });
      }
      handleInputChangeINN(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStaff: Staff = this.state.staff;
        oldStaff.inn = value;
        this.setState({
            staff: oldStaff,
        });
      }
      handleInputChangeSnils(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldStaff: Staff = this.state.staff;
        oldStaff.snils = value;
        this.setState({
            staff: oldStaff,
        });
      }
    public render() {
        let that: StaffEdit = this;
        return (
            <div className="StaffEdit">
                <form className="form-add">
                    <label>
                        <span>Имя</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeFirstName(evt)}} defaultValue={that.state.staff != null ? that.state.staff.firstName : ''}></input>
                    </label>
                    <label>
                        <span>Фамилия</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeLastName(evt)}} defaultValue={that.state.staff != null ? that.state.staff.lastName : ''}></input>
                    </label>
                    <label>
                        <span>Отчество</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangePatronymic(evt)}} defaultValue={that.state.staff != null ? that.state.staff.patronymic : ''}></input>
                    </label>
                    <label>
                        <span>Серия паспорта</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeSerial(evt)}} defaultValue={that.state.staff != null ? that.state.staff.passportSerial : ''}></input>
                    </label>
                    <label>
                        <span>Номер паспорта</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeNumber(evt)}} defaultValue={that.state.staff != null ? that.state.staff.passportNumber : ''}></input>
                    </label>
                    <label>
                        <span>ИНН</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeINN(evt)}} defaultValue={that.state.staff != null ? that.state.staff.inn : ''}></input>
                    </label>
                    <label>
                        <span>СНИЛС</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeSnils(evt)}} defaultValue={that.state.staff != null ? that.state.staff.snils : ''}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/Staff"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}