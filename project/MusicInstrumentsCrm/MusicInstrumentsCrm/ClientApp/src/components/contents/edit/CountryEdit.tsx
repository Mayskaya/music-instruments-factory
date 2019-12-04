import React from 'react';

interface CountryEditProps {
    match: { params: { id: any; }; };
}

interface CountryEditState {
    id: number;
}

export default class CountryEdit extends React.Component<CountryEditProps, CountryEditState> {

    constructor(props: CountryEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="CountryAdd">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <span></span>
                    </label>
                </form>
            </div>
        );
    }
}