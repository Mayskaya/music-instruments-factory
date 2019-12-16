import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import HttpMethod from '../../../util/http/HttpMethods';
import Mark from '../../../domain/Mark';
import Model from '../../../domain/Model';
import Car from '../../../domain/Car';
import Country from '../../../domain/Country';

interface CarAddProps extends RouteComponentProps {
}

interface CarAddState {
    car: Car;
    mark: Array<Mark>;
    model: Array<Model>;
}

export default class CarAdd extends React.Component<CarAddProps, CarAddState> {
    constructor(props: CarAddProps) {
        super(props);
        this.state = {
            mark: new Array(),
            model: new Array(),
            car: new Car(0, '', '', new Model(0, "", new Mark(0, '', new Country(0, '')), new Date())),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Mark/');
        xhr.onload = (evt) => {
            let resm: Array<Mark> = JSON.parse(xhr.responseText);
            this.setState({ mark: resm })
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

        let xhrMo = new XMLHttpRequest();
        xhrMo.open(HttpMethod.GET, 'http://localhost/api/v1/Model/');
        xhrMo.onload = (evt) => {
            let res: Array<Model> = JSON.parse(xhrMo.responseText);
            this.setState({ model: res });
        };
        xhrMo.onerror = (evt) => {
            alert("error");
        };
        xhrMo.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Car');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Car');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.car));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            car: value,
        });
    }

    public render() {
        return (
            <div className="CarAdd">
                <form className="form-add">
                    <label>
                        <span>Номер</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Регион</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Марка</span>
                        <select name='mark' onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.mark.map((team) => <option key={team.name} value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Модель</span>
                        <select name='model' onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.model.map((team) => <option key={team.modelName} value={team.modelName}>{team.modelName}</option>)}
                        </select>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Car"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}