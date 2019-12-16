import React from 'react';
import Factory from '../../../domain/Factory';
import HttpMethod from '../../../util/http/HttpMethods';
import { Link, RouteComponentProps } from 'react-router-dom';
import Address from '../../../domain/Address';

interface MatchProps{
    id: string;
}

interface FactoryEditProps extends RouteComponentProps<MatchProps>{
}

interface FactoryEditState {
    id: number;
    factory: Factory;
    address: Array<Address>;
}

export default class FactoryEdit extends React.Component<FactoryEditProps, FactoryEditState> {

    constructor(props: FactoryEditProps) {
        super(props);
        this.state = { 
            id: parseInt(props.match.params.id), 
            factory: new Factory(0, "", new Address(0, ""), new Date()),
            address: new Array(),
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Factory/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Factory = JSON.parse(xhr.responseText);
            this.setState({ factory: res });
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();

        let xhrAd = new XMLHttpRequest();
        xhrAd.open(HttpMethod.GET, 'http://localhost/api/v1/Address/');
        xhrAd.onload = (evt) => {
            let res: Array<Address> = JSON.parse(xhrAd.responseText);
            this.setState({ address: res });
        };
        xhrAd.onerror = (evt) => {
            alert("error");
        };
        xhrAd.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Factory');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Factory');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        debugger;
        xhr.send(JSON.stringify(this.state.factory));
    }

    handleInputChangeAddress(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldFactory: Factory = this.state.factory;
        oldFactory.address.fullName = value;
        this.setState({
            factory: oldFactory,
        });
      }
      handleInputChangeName(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldFactory: Factory = this.state.factory;
        oldFactory.name = value;
        this.setState({
            factory: oldFactory,
        });
      }
      handleInputChangeYear(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        let oldFactory: Factory = this.state.factory;
        oldFactory.foundationDate.getFullYear = value;
        this.setState({
            factory: oldFactory,
        });
      }

      handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Factory/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Factory');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }

    public render() {
        let that: FactoryEdit = this;
        return (
            <div className="FactoryEdit">
                <form className="form-add">
                    <label>
                        <span>Адрес</span>
                        <select onChange={(evt) =>{this.handleInputChangeAddress(evt)}} defaultValue={this.state.factory.address.fullName}>
                            {this.state.address.map((team) => <option key={team.fullName} value={team.fullName}>{team.fullName}</option>)}
                        </select>
                    </label>
                    <label>
                        <span>Название</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChangeName(evt)}} defaultValue={that.state.factory != null ? that.state.factory.name : ''}></input>
                    </label>
                    <label>
                        <span>Год основания</span>
                        <input type="Date" onChange={(evt) =>{this.handleInputChangeYear(evt)}} defaultValue={that.state.factory != null ? that.state.factory.foundationDate.toString() : ''}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/Factory"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}