import React from 'react';
import GoodType from '../../../domain/GoodType';
import Factory from '../../../domain/Factory';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface GoodEditState {
    goodtype: Array<GoodType>;
    factory: Array<Factory>;
}

export default class GoodAdd extends React.Component<{}, GoodEditState> {

    constructor() {
        super({});
        this.state = {
            goodtype: new Array(),
            factory: new Array(),
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

    public render() {
        return (
            <div className="GoodAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Описание</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Тип</span>
                        <select>
                            {this.state.goodtype.map((team) => <option value={team.typeName}>{team.typeName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Производитель</span>
                        <select>
                            {this.state.factory.map((team) => <option value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Цена</span>
                        <input type=""></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Good"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}