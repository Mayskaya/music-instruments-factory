import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Address from '../../../domain/Address';
import HttpMethod from '../../../util/http/HttpMethods';


interface AddressEditProps extends RouteComponentProps{
}


interface AddressEditState {
    address: Address;
}

export default class AddressAdd extends React.Component<AddressEditProps, AddressEditState> {
    constructor(props:AddressEditProps) {
        super(props, {});
        this.state = { 
            address: new Address(0, ""),
        };
    }
    
    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'http://localhost/api/v1/Address');
        xhr.onload = (evt) => {
            let res: Address = JSON.parse(xhr.responseText);
            this.setState({ address: res })
        };
        xhr.onerror = (evt) => {
            alert("error");
        };
        xhr.send();
    }

    handleSaveButton(event: React.MouseEvent) {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.PUT, 'http://localhost/api/v1/Address');
        xhr.onload = (evt) => {
            alert('Data saved!');
            this.props.history.push('/index/Address');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send(JSON.stringify(this.state.address));

    }

    handleInputChange(event: { target: any; }) {
        const target = event.target;
        const value = target.value;
        this.setState({
            address: value,
        });
      }

    public render() {
        return (
            <div className="AddressAdd">
                <form className="form-add">
                    <label>
                        <span>Полный адрес</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChange(evt)}}></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <Link to="/index/Address"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}