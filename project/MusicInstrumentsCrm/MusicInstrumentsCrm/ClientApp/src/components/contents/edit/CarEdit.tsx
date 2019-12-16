import React from 'react';
import Car from '../../../domain/Car';
import Model from '../../../domain/Model';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps{
    id: string;
}

interface CarEditProps extends RouteComponentProps<MatchProps>{
}

interface CarEditState {
    id: number;
    car: Car;
    mark: Array<Mark>;
    model: Array<Model>;
}

export default class CarEdit extends React.Component<CarEditProps, CarEditState> {

    constructor(props: CarEditProps) {
        super(props);
        this.state = {
            id: parseInt(props.match.params.id),
            mark: new Array(),
            car: new Car(0, '', '', new Model(0, "", new Mark(0, '', new Country(0, '')), new Date())),
            model: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Mark/');
        xhr.onload = (evt) => {
            let resm: Array<Mark> = JSON.parse(xhr.responseText);
            this.setState({ mark: resm });
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
    };

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Car');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Car');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.car));
    }

    handleInputChangeSerial(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldCar: Car = this.state.car;
        oldCar.serial = value;
        this.setState({
            car: oldCar,
        });
      }
      handleInputChangeRegion(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldCar: Car = this.state.car;
        oldCar.region = value;
        this.setState({
            car: oldCar,
        });
      }
      handleInputChangeMark(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldCar: Car = this.state.car;
        oldCar.model.mark.name = value;
        this.setState({
            car: oldCar,
        });
      }
      handleInputChangeModel(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldCar: Car = this.state.car;
        oldCar.model.modelName = value;
        this.setState({
            car: oldCar,
        });
      }

      handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Car/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Car');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }
    
    public render() {
        let that: CarEdit = this;
        return (
            <div className="CarEdit">
                <form className="form-add" id='edit_form'>
                    <label>
                        <span>Номер</span>
                        <input name='serial' type="text" onChange={(evt) =>{this.handleInputChangeSerial(evt)}} defaultValue={that.state.car != null ? that.state.car.serial : ''}></input>
                    </label>
                    <label>
                        <span>Регион</span>
                        <input name='region' type="text" onChange={(evt) =>{this.handleInputChangeRegion(evt)}} defaultValue={that.state.car != null ? that.state.car.region : ''}></input>
                    </label>
                    <label>
                        <span>Марка</span>
                        <select name='mark' onChange={(evt) =>{this.handleInputChangeMark(evt)}} defaultValue={this.state.car.model.mark.name}>
                            {this.state.mark.map((team) => <option key={team.name} value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Модель</span>
                        <select name='model' onChange={(evt) =>{this.handleInputChangeModel(evt)}} defaultValue={this.state.car.model.modelName}>
                            {this.state.model.map((team) => <option key={team.modelName} value={team.modelName}>{team.modelName}</option>)}
                        </select>
                    </label>
                </form>
                <button className="btn-content" form='edit_form' onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/Car"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}