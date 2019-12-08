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
}

export default class CarEdit extends React.Component<CarEditProps, CarEditState> {

    constructor(props: CarEditProps) {
        super(props);
        this.state = { id: props.match.params.id, car: new Car(0, '','',new Model(0,"",new Mark(0, '', new Country(0, '')),new Date())) };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Car/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Car = JSON.parse(xhr.responseText);
            this.setState({ car: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        let that: CarEdit = this;
        return (
            <div className="CarEdit">
                <form className="form-add">
                    <label>
                        <span>Номер</span>
                        <input type="text" value={ that.state.car != null ? that.state.car.serial: '' }></input>
                    </label>
                    <label>
                        <span>Регион</span>
                        <input type="text" value={ that.state.car != null ? that.state.car.region: '' }></input>
                    </label>
                    <label>
                        <span>Марка</span>
                        <input type="text" value={ that.state.car != null ? that.state.car.model.mark.name: ''}></input>
                    </label>
                    <label>
                        <span>Модель</span>
                        <input type="text" value={ that.state.car != null ? that.state.car.model.modelName: ''}></input>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Car"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}