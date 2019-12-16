import React from 'react';
import HttpMethod from "../../../util/http/HttpMethods";
import Address from '../../../domain/Address';
import { Link, RouteComponentProps } from 'react-router-dom';

interface MatchProps{
    id: string;
}

interface AddressEditProps extends RouteComponentProps<MatchProps>{
}


interface AddressEditState {
    id: number;
    address: Address;
}

export default class AddressEdit extends React.Component<AddressEditProps, AddressEditState> {

    constructor(props: AddressEditProps) {
        super(props, {});
        this.state = { 
            id: parseInt(props.match.params.id),
            address: new Address(0, "") 
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, `http://localhost/api/v1/Address/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            let res: Address = JSON.parse(xhr.responseText);
            this.setState({ address: res });
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
        let oldAddress: Address = this.state.address;
        oldAddress.fullName = value;
        this.setState({
            address: oldAddress,
        });
      }

      handleDeleteButton(event: React.MouseEvent){
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.DELETE, `http://localhost/api/v1/Address/${this.props.match.params.id}`);
        xhr.onload = (evt) => {
            alert('Data removed!');
            this.props.history.push('/index/Address');
        };
        xhr.onerror = (evt) => {
            alert('error');
        };
        xhr.send();
      }

    public render() {
        let that: AddressEdit = this;
        return (
            <div className="AddressAdd">
                <form className="form-add">
                    <label>
                        <span>Полный адрес</span>
                        <input type="text" onChange={(evt) =>{this.handleInputChange(evt)}} defaultValue={ that.state.address != null ? that.state.address.fullName: '' }></input>
                    </label>
                </form>
                <button className="btn-content" onClick={(evt) =>{this.handleSaveButton(evt)}}>Save</button>
                <button className="btn-content" onClick={(evt) =>{this.handleDeleteButton(evt)}}>Delete</button>
                <Link to="/index/Address"><button className="btn-content">Cancel</button></Link>
            </div>
        );
    }
}