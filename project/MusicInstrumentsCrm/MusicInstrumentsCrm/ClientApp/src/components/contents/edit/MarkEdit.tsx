import React from 'react';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface MarkEditProps {
    match: { params: { id: any; }; };
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
            id: props.match.params.id,
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

    public render() {
        let that: MarkEdit = this;
        return (
            <div className="MarkEdit">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" value={that.state.mark != null ? that.state.mark.name : ''}></input>
                    </label>
                    <label>
                        <span>Страна</span>
                        <select value={this.state.mark.country.name}>
                            {this.state.country.map((team) => <option key={team.name} value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                </form>
                <button className="btn-content">Save</button>
                <Link to="/index/Mark"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}