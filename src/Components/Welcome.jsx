import $ from 'jquery';
import React from 'react';
import ExternalClient from '../Commons/ExternalClient';

export default class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uname: "Guest"
        }
    }

    componentDidMount() {
        var self = this;
        $.when(ExternalClient.getUsername())
            .done(function(uname) {
                self.setState({
                    uname: uname
                })
            }).fail(function() {
                self.setState({
                    uname: "Stranger"
                })
            });
    }

    render() {
        return (
            <h2>Hi, {this.state.uname}!!!</h2>
        )
    }
}

Welcome.defaultProps = {

};