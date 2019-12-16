import React from 'react';
import HttpMethod from '../../../util/http/HttpMethods';
import Buyer from '../../../domain/Buyer';
import User from '../../../domain/User';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps {
    id: string;
}

interface BuyerEditProps extends RouteComponentProps<MatchProps> {
}

interface BuyerEditState {
    id: number;
    buyer: Buyer;
}
export default class BuyerEdit extends React.Component<BuyerEditProps, BuyerEditState> {

    constructor(props: BuyerEditProps) {
        super(props);
        this.state = {
            id: parseInt(props.match.params.id),
            buyer: new Buyer(0, "", "", "", "", "", new User(0, "", "", new Date(), new Date(), true)),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Buyer/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Buyer = JSON.parse(xhr.responseText);
            this.setState({ buyer: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Buyer');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Buyer');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.buyer));
    }

    handleInputChangeLastName(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldBuyer: Buyer = this.state.buyer;
        oldBuyer.lastName = value;
        this.setState({
            buyer: oldBuyer,
        });
    }
    handleInputChangeFirstName(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldBuyer: Buyer = this.state.buyer;
        oldBuyer.firstName = value;
        this.setState({
            buyer: oldBuyer,
        });
    }
    handleInputChangePatronymic(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldBuyer: Buyer = this.state.buyer;
        oldBuyer.patronymic = value;
        this.setState({
            buyer: oldBuyer,
        });
    }
    handleInputChangeEmail(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldBuyer: Buyer = this.state.buyer;
        oldBuyer.email = value;
        this.setState({
            buyer: oldBuyer,
        });
    }
    handleInputChangePhone(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldBuyer: Buyer = this.state.buyer;
        oldBuyer.phone = value;
        this.setState({
            buyer: oldBuyer,
        });
    }

    handleDeleteButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Buyer/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Buyer');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
    }

    public render() {
        let that: BuyerEdit = this;
        return (
            <div className="BuyerAdd">
                <form className="form-add">
                    <label>
                        <span>Фамилия</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeLastName(evt)}} defaultValue={that.state.buyer != null ? that.state.buyer.lastName : ''}></input>
                    </label>
                    <label>
                        <span>Имя</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeFirstName(evt)}} defaultValue={that.state.buyer != null ? that.state.buyer.firstName : ''}></input>
                    </label>
                    <label>
                        <span>Отчество</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangePatronymic(evt)}} defaultValue={that.state.buyer != null ? that.state.buyer.patronymic : ''}></input>
                    </label>
                    <label>
                        <span>Эл. почта</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeEmail(evt)}} defaultValue={that.state.buyer != null ? that.state.buyer.email : ''}></input>
                    </label>
                    <label>
                        <span>Телефон</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangePhone(evt)}} defaultValue={that.state.buyer != null ? that.state.buyer.phone : ''}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/Buyer"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}