import React from 'react';
import Model from '../../../domain/Model';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps {
    id: string;
}
interface ModelEditProps extends RouteComponentProps<MatchProps> {
}

interface ModelEditState {
    id: number;
    model: Model;
    mark: Array<Mark>;
}

export default class ModelEdit extends React.Component<ModelEditProps, ModelEditState> {

    constructor(props: ModelEditProps) {
        super(props);
        this.state = {
            id: parseInt(props.match.params.id),
            model: new Model(0, '', new Mark(0, '', new Country(0, '')), new Date()),
            mark: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Model/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Model = JSON.parse(xhr.responseText);
            this.setState({ model: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

        let xhrM = new XMLHttpRequest();
        xhrM.open(HttpMethod.GET, 'http://localhost/api/v1/Mark/');
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
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Model');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Model');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.model));
    }

    handleDeleteButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Model/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Model');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
    }

    handleInputChangeModel(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldModel: Model = this.state.model;
        oldModel.modelName = value;
        this.setState({
            model: oldModel,
        });
    }
    handleInputChangeMark(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldModel: Model = this.state.model;
        oldModel.mark.name = value;
        this.setState({
            model: oldModel,
        });
    }
    handleInputChangeYear(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldModel: Model = this.state.model;
        oldModel.year = value;
        this.setState({
            model: oldModel,
        });
    }

    public render() {
        let that: ModelEdit = this;
        return (
            <div className="ModelEdit">
                <form className="form-add">
                    <label>
                        <span>Название модели</span>
                        <input type="text" onChange={(evt) => { this.handleInputChangeModel(evt) }} defaultValue={that.state.model != null ? that.state.model.modelName : ''}></input>
                    </label>
                    <label>
                        <span>Марка</span>
                        <select value={this.state.model.mark.name}>
                            {this.state.mark.map((team) => <option key={team.name} onChange={(evt) => { this.handleInputChangeMark(evt) }} defaultValue={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Год</span>
                        <input type="text" onChange={(evt) => { this.handleInputChangeYear(evt) }} defaultValue={that.state.model != null ? that.state.model.year.toString() : ''}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <button className="btn-content" onClick={(evt) => { this.handleDeleteButton(evt) }}>Delete</button>
                <Link to="/index/Model"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}