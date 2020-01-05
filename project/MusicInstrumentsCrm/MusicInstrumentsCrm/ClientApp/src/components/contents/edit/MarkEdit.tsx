import React from 'react';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

interface MatchProps{
    id: string;
}

interface MarkEditProps extends RouteComponentProps<MatchProps>{
}

interface MarkEditState {
    id: number;
    mark: Mark;
    country: Array<Country>;
}

export default class MarkEdit extends React.Component<MarkEditProps, MarkEditState> {

    constructor(props: MarkEditProps) {
        super(props);
        this.state = {
            id: parseInt(props.match.params.id),
            mark: new Mark(0, '', new Country(0, '')),
            country: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Mark/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Mark = JSON.parse(xhr.responseText);
            this.setState({ mark: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

        let xhrC = new XMLHttpRequest();
        xhrC.open(HttpMethod.GET, 'http://localhost/api/v1/Country/');
        xhrC.onload = (evt) => {
            let res: Array<Country> = JSON.parse(xhrC.responseText);
            this.setState({ country: res });
        };
        xhrC.onerror = (evt) => {
            alert("error");
        };
        xhrC.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Mark');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Mark');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.mark));
    }

    handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Mark/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Mark');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }

      handleInputChangeName(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldMark: Mark = this.state.mark;
        oldMark.name = value;
        this.setState({
            mark: oldMark,
        });
      }
      handleInputChangeCountry(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldMark: Mark = this.state.mark;
        oldMark.country.name = value;
        this.setState({
            mark: oldMark,
        });
      }

    public render() {
        let that: MarkEdit = this;
        return (
            <div className="MarkEdit">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeName(evt)}} defaultValue={that.state.mark != null ? that.state.mark.name : ''}></input>
                    </label>
                    <label>
                        <span>Страна</span>
                        <select onChange={(evt) =>{this.handleInputChangeCountry(evt)}} defaultValue={this.state.mark.country.name}>
                            {this.state.country.map((team) => <option key={team.name} value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/Mark"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}