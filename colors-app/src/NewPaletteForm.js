import React, { Component } from 'react';
import classNames from "classnames";
import {arrayMove} from "react-sortable-hoc";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DraggableColorList from "./DraggableColorList";
import PaletteformNav from "./PaletteformNav";
import ColorPickerForm from "./ColorPickerForm";
import styles from "./styles/NewPaletteFormStyles";
import seedColors from "./seedColors";

class NewPaletteForm extends Component {
  static defaultProps={
    maxColors:20
  };
  constructor(props){
      super(props);
      this.state={
        open: true,
        colors: seedColors[0].colors,
      }
      this.addNewColor = this.addNewColor.bind(this);
      this.handleChange=this.handleChange.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);
      this.removeColor=this.removeColor.bind(this);
      this.clearColors=this.clearColors.bind(this);
      this.addRandomColor=this.addRandomColor.bind(this);
    }
    
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }
    handleSubmit(newPalette){
      newPalette.id=newPalette.paletteName.toLowerCase().replace(/ /g, "-");
      newPalette.colors = this.state.colors;
      this.props.savePalette(newPalette);
      this.props.history.push("/");
    }
    
    addNewColor(newColor){
        this.setState({colors:[...this.state.colors,newColor]});
    }

    clearColors(){
      this.setState({colors:[]});
    }
    addRandomColor(){
      const allColors=this.props.palettes.map(p=>p.colors).flat();
      var rand = Math.floor(Math.random() * allColors.length);
      const randomColor = allColors[rand];
      this.setState({ colors: [...this.state.colors, randomColor] });
    }
    onSortEnd = ({ oldIndex, newIndex }) => {
      this.setState(({ colors }) => ({
        colors: arrayMove(colors, oldIndex, newIndex)
      }));
    };
  //inline binding can be referenced to from the sortable-hoc docs
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  removeColor(colorName){
    this.setState({
      colors:this.state.colors.filter(color=>color.name!==colorName)
    });
  }

  render() {
    const { classes,maxColors,palettes } = this.props;
    const { open,colors } = this.state;
    const isPaletteFull=colors.length>=maxColors;
    return (
        <div className={classes.root}>
        <PaletteformNav
          open={open}
          palettes={palettes}
          classes={classes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton fontSize="small" onClick={this.handleDrawerClose}>
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
          <Typography variant='h4'gutterBottom>
            Design Your Palette
          </Typography>
          <div className={classes.buttons}>
            <Button variant='contained' 
              color='secondary' 
              onClick={this.clearColors}
              className={classes.button}
            > 
              Clear Palette
            </Button>
            <Button variant='contained' 
              color='primary' 
              onClick={this.addRandomColor} 
              disabled={isPaletteFull}
              className={classes.button}
            >
              Random Color
            </Button>  
          </div>
          <ColorPickerForm 
            colors={colors}
            addNewColor={this.addNewColor}
            isPaletteFull={isPaletteFull}
          />
        </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableColorList
            colors={colors}
            removeColor={this.removeColor}
            onSortEnd={this.onSortEnd}
            axis='xy'
            distance={20}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);