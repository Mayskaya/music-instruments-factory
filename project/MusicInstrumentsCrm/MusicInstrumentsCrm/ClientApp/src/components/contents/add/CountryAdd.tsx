import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';

interface CountryAddProps extends RouteComponentProps {
}

interface CountryAddState {
    country: Country;
}

export default class CountryAdd extends React.Component<CountryAddProps, CountryAddState> {
    constructor(props: CountryAddProps) {
        super(props);
        this.state = {
            country: new Country(0, "")
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Country/');
        xhr.onload = (evt) => {
            let res: Country = JSON.parse(xhr.responseText);
            this.setState({ country: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.POST, 'http://localhost/api/v1/Country');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Country');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.country));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            country: value,
        });
    }

    public render() {
        return (
            <div className="CountryAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" onChange={(evt) => { this.handleInputChange(evt) }}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) => { this.handleSaveButton(evt) }}>Save</button>
                <Link to="/index/Buyer" ><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}