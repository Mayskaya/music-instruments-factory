import React from 'react';
import Good from '../../../domain/Good';
import GoodType from '../../../domain/GoodType';
import Factory from '../../../domain/Factory';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps{
    id: string;
}

interface GoodEditProps extends RouteComponentProps<MatchProps>{
}

interface GoodEditState {
    id: number;
    good: Good;
    goodtype: Array<GoodType>;
    factory: Array<Factory>;
}

export default class GoodEdit extends React.Component<GoodEditProps, GoodEditState> {

    constructor(props: GoodEditProps) {
        super(props);
        this.state = {
            id: parseInt(props.match.params.id),
            good: new Good(0, '', '', new GoodType(0, ''), new Factory(0, '', new Address(0, ''), new Date()), 0),
            goodtype: new Array(),
            factory: new Array(),
        };
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
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Good');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Good');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.good));
    }

    handleInputChangeName(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldGood: Good = this.state.good;
        oldGood.name = value;
        this.setState({
            good: oldGood,
        });
      }
      handleInputChangeDescription(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldGood: Good = this.state.good;
        oldGood.description = value;
        this.setState({
            good: oldGood,
        });
      }
      handleInputChangeType(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldGood: Good = this.state.good;
        oldGood.goodType.typeName = value;
        this.setState({
            good: oldGood,
        });
      }
      handleInputChangeFactory(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldGood: Good = this.state.good;
        oldGood.factory.name = value;
        this.setState({
            good: oldGood,
        });
      }
      handleInputChangePrice(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldGood: Good = this.state.good;
        oldGood.price = value;
        this.setState({
            good: oldGood,
        });
      }

      handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Good/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Good');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }

    public render() {
        let that: GoodEdit = this;
        return (<div className="GoodEdit">
            <form className="form-add">
                <label>
                    <span>Название</span>
                    <input type="text" onChange={(evt) =>{this.handleInputChangeName(evt)}} defaultValue={that.state.good != null ? that.state.good.name : ''}></input>
                </label>
                <label>
                    <span>Описание</span>
                    <input type="text" onChange={(evt) =>{this.handleInputChangeDescription(evt)}} defaultValue={that.state.good != null ? that.state.good.description : ''}></input>
                </label>
                <label>
                    <span>Тип</span>
                    <select onChange={(evt) =>{this.handleInputChangeType(evt)}} defaultValue={this.state.good.goodType.typeName}>
                        {this.state.goodtype.map((team) => <option value={team.typeName}>{team.typeName}</option>)}
                    </select>
                </label>
                <label>
                    <span>Производитель</span>
                    <select onChange={(evt) =>{this.handleInputChangeFactory(evt)}} defaultValue={this.state.good.factory.name}>
                        {this.state.factory.map((team) => <option value={team.name}>{team.name}</option>)}
                    </select>
                </label>
                <label>
                    <span>Цена</span>
                    <input type="number" onChange={(evt) =>{this.handleInputChangePrice(evt)}} defaultValue={this.state.good != null ? this.state.good.price : ''}></input>
                </label>
            </form>
            <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
            <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
            <Link to="/index/Good"><button className="btn-content">Cancel</button></Link>
        </div>
        );
    }
}