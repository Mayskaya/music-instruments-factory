import React from 'react';
import HttpMethod from '../../../util/http/HttpMethods';
import Buyer from '../../../domain/Buyer';
import User from '../../../domain/User';
import { Link } from 'react-router-dom';

interface BuyerEditProps {
    match: { params: { id: any; }; };
}

interface BuyerEditState {
    id: number;
    buyer: Buyer;
}
export default class BuyerEdit extends React.Component<BuyerEditProps, BuyerEditState> {

    constructor(props: BuyerEditProps) {
        super(props);
        this.state = {
            id: props.match.params.id,
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



    public render() {
        let that: BuyerEdit = this;
        return (
            <div className="BuyerAdd">
                <form className="form-add">
                    <label>
                        <span>Фамилия</span>
                        <input type="text" value={that.state.buyer != null ? that.state.buyer.lastName : ''}></input>
                    </label>
                    <label>
                        <span>Имя</span>
                        <input type="text" value={that.state.buyer != null ? that.state.buyer.firstName : ''}></input>
                    </label>
                    <label>
                        <span>Отчество</span>
                        <input type="text" value={that.state.buyer != null ? that.state.buyer.patronymic : ''}></input>
                    </label>
                    <label>
                        <span>Эл. почта</span>
                        <input type="text" value={that.state.buyer != null ? that.state.buyer.email : ''}></input>
                    </label>
                    <label>
                        <span>Телефон</span>
                        <input type="text" value={that.state.buyer != null ? that.state.buyer.phone : ''}></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <button className="btn-content">Delete</button>
                <Link to="/index/Buyer"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}