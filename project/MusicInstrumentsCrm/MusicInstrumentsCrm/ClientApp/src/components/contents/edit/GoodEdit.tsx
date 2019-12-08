import React from 'react';
import Good from '../../../domain/Good';
import GoodType from '../../../domain/GoodType';
import Factory from '../../../domain/Factory';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface GoodEditProps {
    match: { params: { id: any; }; };
}

interface GoodEditState {
    id: number;
    good: Good;
}

export default class GoodEdit extends React.Component<GoodEditProps, GoodEditState> {

    constructor(props: GoodEditProps) {
        super(props);
        this.state = { id: props.match.params.id, good: new Good(0, '', '', new GoodType(0, ''), new Factory(0, '', new Address(0, ''), new Date()), 0) };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Good/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Good = JSON.parse(xhr.responseText);
            this.setState({ good: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        let that: GoodEdit = this;
        return (<div className="GoodEdit">
            <form className="form-add">
                <label>
                    <span>Название</span>
                    <input type="text" value={that.state.good != null ? that.state.good.name : ''}></input>
                </label>
                <label>
                    <span>Описание</span>
                    <input type="text" value={that.state.good != null ? that.state.good.description : ''}></input>
                </label>
                <label>
                    <span>Тип</span>
                    <input type="text" value={that.state.good != null ? that.state.good.goodType.typeName : ''}></input>
                </label>
                <label>
                    <span>Производитель</span>
                    <input type="text" value={that.state.good != null ? that.state.good.factory.name : ''}></input>
                </label>
                <label>
                    <span>Цена</span>
                    <input type="text" value={that.state.good != null ? that.state.good.price : ''}></input>
                </label>
            </form>
            <button className="btn-content">Save</button>
            <Link to="/index/Good"><button className="btn-content">Cancel</button></Link>
        </div>
        );
    }
}