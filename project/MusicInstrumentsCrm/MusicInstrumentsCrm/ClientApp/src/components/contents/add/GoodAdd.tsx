import React from 'react';
import GoodType from '../../../domain/GoodType';
import Factory from '../../../domain/Factory';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';
import Good from '../../../domain/Good';
import Address from '../../../domain/Address';

interface GoodAddProps extends RouteComponentProps {
}

interface GoodAddState {
    good: Good;
    goodtype: Array<GoodType>;
    factory: Array<Factory>;
}

export default class GoodAdd extends React.Component<GoodAddProps, GoodAddState> {

    constructor(props: GoodAddProps) {
        super(props)
        this.state = {
            goodtype: new Array(),
            factory: new Array(),
            good: new Good(0, '', '', new GoodType(0, ''), new Factory(0, '', new Address(0, ''), new Date()), 0),
        };
    }

    componentDidMount() {
        let xhrG = new XMLHttpRequest();
        xhrG.open(HttpMethod.GET, 'http://localhost/api/v1/GoodType/');
        xhrG.onload = (evt) => {
            let res: Array<GoodType> = JSON.parse(xhrG.responseText);
            this.setState({ goodtype: res });
        };
        xhrG.onerror = (evt) => {
            alert("error");
        };
        xhrG.send();

        let xhrF = new XMLHttpRequest();
        xhrF.open(HttpMethod.GET, 'http://localhost/api/v1/Factory/');
        xhrF.onload = (evt) => {
            let res: Array<Factory> = JSON.parse(xhrF.responseText);
            this.setState({ factory: res });
        };
        xhrF.onerror = (evt) => {
            alert("error");
        };
        xhrF.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Good');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Good');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.good));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            good: value,
        });
    }

    public render() {
        return (
            <div className="GoodAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Описание</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Тип</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.goodtype.map((team) => <option value={team.typeName}>{team.typeName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Производитель</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.factory.map((team) => <option value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Цена</span>
                        <input type="number" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Good"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}