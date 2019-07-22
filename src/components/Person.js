import React, { Component } from 'react'
import { Prompt } from 'react-router-dom'

export default class Person extends Component {

    state = {
        text: "",
        isFormStarted: false
    }

    onChangeText = (e) => {
        this.setState({
            text: e.target.value,
            isFormStarted: true
        })
    }

    render() {
        return (
            <div>
                <Prompt when={this.state.isFormStarted} message="are u sure to leave?" />
                this is person page {this.props.match.params.personName}
                <input type="text" value={this.state.text} onChange={this.onChangeText} />
            </div>
        )
    }
}