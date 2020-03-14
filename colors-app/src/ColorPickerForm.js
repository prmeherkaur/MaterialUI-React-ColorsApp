import React, { Component } from 'react';
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from "@material-ui/core/Button";

const styles = {
    picker: {
      width: "100% !important",
      marginTop: "2rem"
    },
    addColor: {
      width: "100%",
      padding: "1rem",
      marginTop: "1rem",
      fontSize: "2rem"
    },
    colorNameInput: {
      width: "100%",
      height: "70px"
    }
  };
  

class ColorPickerForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            currentColor:"teal",
            newColorName:""
        };
        this.updateCurrentColor=this.updateCurrentColor.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
          this.props.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          )
        );
        ValidatorForm.addValidationRule("isColorUnique", () =>
          this.props.colors.every(
              ({ color }) => color !== this.state.currentColor
            )
        );
    }
    updateCurrentColor(newColor){
        this.setState({ currentColor: newColor.hex});
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }
    handleSubmit(){
      const newColor={
          name:this.state.newColorName,
          color:this.state.currentColor
      };
      this.props.addNewColor(newColor);
      this.setState({newColorName:""});
    }

    render(){
        const {isPaletteFull, classes}=this.props;
        return(
            <div>
                <ChromePicker
                    color={this.state.currentColor}
                    onChangeComplete={this.updateCurrentColor}
                    className={classes.picker}
                />
          <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
            <TextValidator
              value={this.state.newColorName}
              name='newColorName'
              onChange={this.handleChange}
              className={classes.colorNameInput}
              placeholder='Color Name'
              variant='filled'
              margin='normal'
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "Enter a color name",
                "Color name must be unique",
                "Color already used!"
              ]}
            />
            <Button
              variant='contained'
              type='submit'
              color='primary'
              className={classes.addColor}
              disabled={isPaletteFull}
              style={{ backgroundColor:isPaletteFull?"grey" :this.state.currentColor }}
            >
              Add Color
            </Button>
          </ValidatorForm>
            </div>
        );
    }
}
 export default withStyles(styles)(ColorPickerForm);