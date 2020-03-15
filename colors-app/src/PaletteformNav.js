import React, {Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PaletteformDialog from "./PaletteFormDialog";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PaletteFormDialog from './PaletteFormDialog';

const drawerWidth = 400;
const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    height: "64px"
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  navBtns: {
    width:"20%",
    
    marginRight:"1rem",
    "& a":{
      textDecoration: "none"
    }
  },
  button: {
    margin: "0 0.5rem"
  }
});


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
    const { classes, open,palettes,handleSubmit } = this.props;
    const { newPaletteName } = this.state;
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
              onClick={this.props.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create a Palette
            </Typography>
            </Toolbar>
            <div className={classes.navBtns}>
            
            <Link to='/'>
              <Button variant='outlined' color='secondary' className={classes.button}>
                GO BACK
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
        {this.state.formShowing && (
          <PaletteFormDialog palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} />
        )}
        </div>
    );
}
};

export default withStyles(styles,{withTheme:true}) (PaletteformNav);