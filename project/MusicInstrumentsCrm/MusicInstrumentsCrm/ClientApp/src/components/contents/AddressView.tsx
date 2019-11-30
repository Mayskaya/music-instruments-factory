import React from 'react';
import { Link } from 'react-router-dom';
import Address from "../../domain/Address";
import HttpMethod from "../../util/http/HttpMethods";


export interface AddressViewState {
    addressList: Array<Address>;
}

export default class AddressView extends React.Component<{}, AddressViewState> {

    constructor() {
        super({}, {});
        this.state = {
            addressList: new Array()
        };
    }

    componentDidMount() {
        let xhr = new XMLHttpRequest();
        xhr.open(HttpMethod.GET, 'https://localhost:5001/api/v1/Address');
        xhr.onload = (evt)=>{
            let res: Array<Address> = JSON.parse(xhr.responseText);
            this.setState({addressList: res})
        };
        xhr.onerror = (evt)=> {
            alert("error");
        };
        xhr.send();
    }

    public render() {
        return (
            <div className="content-view">
                <Link to="/index/AddressAdd"><button className="btn-content">Add</button></Link>
                <button className="btn-content">Delete</button>

                <table className="table-content">
                    <tr >
                        <th>ID</th>
                        <th>Полный адрес</th>
                    </tr>
                    {
                        this.state.addressList.map((el: Address) => {
                            return <tr>
                                <td>{el.id}</td>
                                <td>{el.fullName}</td>
                            </tr>
                        })
                    }
                </table>
            </div>
        );
    }
}