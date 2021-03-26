import React, { Component } from 'react'

export default class CardContent extends Component {
    render() {
        return (
            <div >
                Card-{this.props.color}
            </div>
        )
    }
}
