import React, { Component } from "react";
import ColorBox from "./ColorBox";
class SingleColorPalette extends Component {
    constructor (props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    }
    gatherShades(palette,colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shades = shades.concat(
            allColors[key].filter(color => color.id === colorToFilterBy)
        );
        }
        //return all shades of given color minus the unnecesary 50: one
        return shades.slice(1);
    }
  render() {
      const colorBoxes=this._shades.map(color =>(
          <ColorBox
          background={color.hex} 
          name={color.name} 
          key={color.id}
          showLink={false}
          />
      ));
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className='Palette-colors'>{colorBoxes}</div>
      </div>
    );
  }
}
export default SingleColorPalette;