import React, { Component } from 'react'
import './ColorBox.css'

export default class ColorBox extends Component {
    render() {
        return (
            <div className="Colorbox" style={{background:this.props.color}}>
                <div className="Copy-container">
                <div className="Box-content">
                    <span>{this.props.name}</span>
                </div>
                <button className="Copy-button">Copy</button>
                </div>
                <span className="C-more">MORE</span>
            </div>
        )
    }
}
