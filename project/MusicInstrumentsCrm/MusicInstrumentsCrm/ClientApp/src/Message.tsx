import React from "react";

interface MessageProps {
    msg: string;
}

export default class Message extends React.Component<MessageProps, {}>{
    public render() {
        return (<p>{this.props.msg}</p>);
    }
}
