import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Model from '../../../domain/Model';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';

interface ModelAddProps extends RouteComponentProps{
}

interface ModelAddState {
    model: Model;
    mark: Array<Mark>;
}

export default class ModelAdd extends React.Component<ModelAddProps, ModelAddState> {
    constructor(props: ModelAddProps) {
        super(props);
        this.state = {
            model: new Model(0, '', new Mark(0, '', new Country(0, '')), new Date()),
            mark: new Array(),
        };
    }
    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Model');
        xhr.onload = (evt) => {
            let res: Model = JSON.parse(xhr.responseText);
            this.setState({ model: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

        let xhrM = new XMLHttpRequest();
        xhrM.open(HttpMethod.GET, 'http://localhost/api/v1/Mark');
        xhrM.onload = (evt) => {
            let res: Array<Mark> = JSON.parse(xhrM.responseText);
            this.setState({ mark: res });
        };
        xhrM.onerror = (evt) => {
            alert("error");
        };
        xhrM.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Model');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Model');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.model));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            model: value,
        });
    }

    public render() {
        return (
            <div className="ModelAdd">
                <form className="form-add">
                    <label>
                        <span>Название модели</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChange(evt)}}></input>
                    </label>
                    <label>
                    <span>Марка</span>
                        <select onChange={(evt) =>{this.handleInputChange(evt)}}>
                            {this.state.mark.map((team) => <option key={team.name} onChange={(evt) => { this.handleInputChange(evt) }} >{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Год</span>
                        <input type="number" onChange={(evt) =>{this.handleInputChange(evt)}}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Model"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}