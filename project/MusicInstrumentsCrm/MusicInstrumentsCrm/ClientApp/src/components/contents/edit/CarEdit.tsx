import React from 'react';
import Car from '../../../domain/Car';
import Model from '../../../domain/Model';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface CarEditProps {
    match: { params: { id: any; }; };
}

interface CarEditState {
    id: number;
    car: Car;
    mark: Array<Mark>;
}

export default class CarEdit extends React.Component<CarEditProps, CarEditState> {

    constructor(props: CarEditProps) {
        super(props);
        this.state = {
            id: props.match.params.id,
            mark: new Array(),
            car: new Car(0, '', '', new Model(0, "", new Mark(0, '', new Country(0, '')), new Date())),

        };

    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Mark/');
        xhr.onload = (evt) => {
            let resm: Array<Mark> = JSON.parse(xhr.responseText);
            this.setState({ mark: resm })
            debugger;
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
        
        let xhrM = new XMLHttpRequest();
        xhrM.open(HttpMethod.GET, `http://localhost/api/v1/Car/${this.props.match.params.id}`);
        xhrM.onload = (evt) => {
            let res: Car = JSON.parse(xhrM.responseText);
            this.setState({ car: res });
        };
        xhrM.onerror = (evt) => {
            alert("error");
        };
        xhrM.send();
    };

    Select() {

    }

    public render() {
        let that: CarEdit = this;
        // debugger;
        return (
            <div className="CarEdit">
                <form className="form-add">
                    <label>
                        <span>Номер</span>
                        <input type="text" value={that.state.car != null ? that.state.car.serial : ''}></input>
                    </label>
                    <label>
                        <span>Регион</span>
                        <input type="text" value={that.state.car != null ? that.state.car.region : ''}></input>
                    </label>
                    <label>
                        <span>Марка</span>
                        <select value={this.state.car.model.mark.name}>
                            {this.state.mark.map((team) => <option key={team.name} value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Модель</span>
                        <input type="text" value={that.state.car != null ? that.state.car.model.modelName : ''}></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Car"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}