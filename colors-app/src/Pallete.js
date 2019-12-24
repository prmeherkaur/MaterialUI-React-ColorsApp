import React, { Component } from 'react'
import ColorBox from './ColorBox.js'
import './Pallete.css';

export default class Pallete extends Component {
    render() {
        const ColBoxes=this.props.colors.map(c=>
            <ColorBox color={c.color} name={c.name}/>
            )
        return (
            <div className="Pallete">
                {/* Header  */}
                <div className="Pallete-colors">{ColBoxes}</div>
                {/* Footer  */}
            </div>
        )
    }
}
