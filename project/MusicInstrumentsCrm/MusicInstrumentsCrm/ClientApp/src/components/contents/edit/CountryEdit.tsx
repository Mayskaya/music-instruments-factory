import React from 'react';
import Country from '../../../domain/Country';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';


interface MatchProps{
    id: string;
}

interface CountryEditProps extends RouteComponentProps<MatchProps>{
}

interface CountryEditState {
    id: number;
    country: Country;
}

export default class CountryEdit extends React.Component<CountryEditProps, CountryEditState> {

    constructor(props: CountryEditProps) {
        super(props);
        this.state = { 
            id: parseInt(props.match.params.id),
            country: new Country(0, "") 
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Country/${this.props.match.params.id}`);
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
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Country');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Country');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.country));
    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldCountry: Country = this.state.country;
        oldCountry.name = value;
        this.setState({
            country: oldCountry,
        });
      }

      handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Country/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Country');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }

    public render() {
        let that: CountryEdit = this;
        return (
            <div className="CountryAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChange(evt)}} defaultValue={ that.state.country != null ? that.state.country.name: '' }></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/Country"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}