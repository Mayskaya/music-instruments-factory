import React from 'react';

interface StoreEditProps {
    match: { params: { id: any; }; };
}

interface StoreEditState {
    id: number;
}

export default class StoreEdit extends React.Component<StoreEditProps, StoreEditState> {

constructor(props: StoreEditProps) {
        super(props);
        this.setState({ id: props.match.params.id });
    }
    public render() {
        return (
            <div className="StoreEdit">
                <form className="form-add">
                    <label>
                        <span>Название</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Адрес</span>
                        <div></div>
                    </label>
                    <label>
                        <span>Год открытия</span>
                        <div></div>
                    </label>
                </form>
            </div>
        );
    }
}