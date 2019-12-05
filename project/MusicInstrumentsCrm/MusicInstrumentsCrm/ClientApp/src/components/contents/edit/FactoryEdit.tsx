import React from 'react';
import Factory from '../../../domain/Factory';

interface FactoryEditProps {
    match: { params: { id: any; }; };
}

interface FactoryEditState {
    id: number;
}

export default class FactoryEdit extends React.Component<FactoryEditProps, FactoryEditState> {

    constructor(props: FactoryEditProps) {
        super(props, {});
        this.setState({ id: props.match.params.id });
    }

    public render() {
        return (
            <div className="FactoryEdit">
                <form className="form-add">
                    <label>
                        <span>Адрес</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Название</span>
                        <span></span>
                    </label>
                    <label>
                        <span>Год основания</span>
                        <span></span>
                    </label>
                </form>
            </div>
        );
    }
}