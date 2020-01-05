import React from 'react';
import { RouteComponentProps } from 'react-router';
import Mark from '../../../domain/Mark';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link } from 'react-router-dom';

interface MarkAddProps extends RouteComponentProps {
}

interface MarkAddState {
    mark: Mark;
    country: Array<Country>;
}

export default class MarkAdd extends React.Component<MarkAddProps, MarkAddState> {

    constructor(props: MarkAddProps) {
        super(props);
        this.state = {
            mark: new Mark(0, '', new Country(0, '')),
            country: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Mark');
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
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Mark');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Mark');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.mark));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            mark: value,
        });
    }

    public render() {
        return (
            <div className="MarkAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                    <label>
                        <span>Страна</span>
                        <select onChange={(evt) => { this.handleInputChange(evt) }}>
                            {this.state.country.map((team) => <option key={team.name} value={team.name}>{team.name}</option>)}
                        </select>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Mark"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}