import React, { Component } from 'react'
import './ColorBox.css'
import CopytoClipboard from "react-copy-to-clipboard";
export default class ColorBox extends Component {
    render() {
        const {color,name}=this.props;
        return (
            <CopytoClipboard text={color}>
                <div className="Colorbox" style={{background:color}}>
                <div className="Copy-container">
                <div className="Box-content">
                    <span>{name}</span>
                </div>
                <button className="Copy-button">Copy</button>
                </div>
                <span className="C-more">MORE</span>
                </div>
            </CopytoClipboard>
            
        )
    }
}
