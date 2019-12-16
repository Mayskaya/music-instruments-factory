import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Buyer from '../../../domain/Buyer';
import User from '../../../domain/User';
import HttpMethod from '../../../util/http/HttpMethods';

interface BuyerAddProps extends RouteComponentProps {
}

interface BuyerAddState {
    buyer: Buyer;
}

export default class BuyerAdd extends React.Component<BuyerAddProps, BuyerAddState> {
    constructor(props: BuyerAddProps) {
        super(props);
        this.state = {
            buyer: new Buyer(0, "", "", "", "", "", new User(0, "", "", new Date(), new Date(), true)),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Buyer');
        xhr.onload = (evt) => {
            let res: Buyer = JSON.parse(xhr.responseText);
            this.setState({ buyer: res })
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Buyer');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Buyer');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.buyer));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            buyer: value,
        });
    }

    public render() {
        return (
            <div className="BuyerAdd">
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
                        <span>Эл. почта</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Телефон</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Buyer"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}