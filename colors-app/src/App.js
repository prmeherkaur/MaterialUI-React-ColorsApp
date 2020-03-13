import React, { Component } from "react";
import Palette from "./Palette";
import {Route,Switch} from "react-router-dom";
import seedColors from "./seedColors";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";
import SingleColorPalette from "./SingleColorPalette";
import { generatePalette } from "./colorHelpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  savePalette(newPalette) {
    this.setState({ palettes: [...this.state.palettes, newPalette] });
  }
  findPalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id===id;
    }
    );
  }
  render() {
   
    return (
      <Switch>
        <Route exact path="/" render={routeProps => <PaletteList palettes={this.state.palettes} {...routeProps}/>}/>
        <Route exact path="/palette/new" render={routeProps =>
          <NewPaletteForm 
            savePalette={this.savePalette} 
            palettes={this.state.palettes} 
            {...routeProps} 
          />}
       />
        <Route exact path="/palette/:id"
        render={routeProps =>(
          <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route exact path="/palette/:paletteId/:colorId"
          render={routeProps =>(
            <SingleColorPalette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId) //this passes the entire palette , we will need to extract the 50,100 etc of our color id
                )}
                colorId={routeProps.match.params.colorId} //We will also need the color id for extraction
              />
            )}
        />
      </Switch>
      
    );
  }
}

export default App;
