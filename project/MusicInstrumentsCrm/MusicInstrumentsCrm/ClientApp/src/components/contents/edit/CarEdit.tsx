import React from 'react';

interface CarEditProps {
    match: { params: { id: any; }; };
}

interface CarEditState {
    id: number;
}

export default class CarEdit extends React.Component<CarEditProps, CarEditState> {

    constructor(props: CarEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="CarAdd">
                <form className="form-add">
                    <label>
                        <span>Номер</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Регион</span>
                        <input type=""></input>
                    </label>
                    <label>
                        <span>Марка, модель</span>
                        <input type=""></input>
                    </label>
                </form>
            </div>
        );
    }
}