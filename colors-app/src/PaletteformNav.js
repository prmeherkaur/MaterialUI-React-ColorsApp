import React, {Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PaletteFormDialog from './PaletteFormDialog';
import styles from "./styles/PaletteformNavStyles";

class PaletteformNav extends Component{
    constructor(props) {
        super(props);
        this.state = { newPaletteName: "" ,formShowing:false};
        this.handleChange = this.handleChange.bind(this);
        this.showForm=this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
      }
      showForm(){
        this.setState({
          formShowing:true
        });
      }
      hideForm() {
        this.setState({ formShowing: false });
      }
      handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }

render(){
    const { 
      classes, 
      open,
      palettes,
      handleSubmit,
      handleDrawerOpen 
    } = this.props;
    const {formShowing}=this.state;
    return(
    <div className={classes.root}>
    <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerOpen}
              className={classNames(classes.menuButton, { [classes.hide]:open})}
            >
            <AddToPhotosIcon/>
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create a Palette
            </Typography>
            </Toolbar>
            <div className={classes.navBtns}>
            
            <Link to='/'>
              <Button variant='outlined' color='secondary' className={classes.button}>
                Back
              </Button>
            </Link>
            <Button
              variant='outlined'
              color='primary'
              onClick={this.showForm}
              className={classes.button}
            >
              Save
            </Button>
            </div>
        </AppBar>
        {formShowing && (
          <PaletteFormDialog palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} />
        )}
        </div>
    );
}
};

export default withStyles(styles,{withTheme:true}) (PaletteformNav);