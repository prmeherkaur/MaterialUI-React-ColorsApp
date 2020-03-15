import { DRAWER_WIDTH } from "../constants";
import sizes from "./sizes";
const drawerWidth = DRAWER_WIDTH;
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
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      marginRight:"0.4rem",
      "& a":{
        textDecoration: "none"
      },
      [sizes.down("xs")]: {
        marginRight: "0.2rem"
      }
    },
    button: {
      height:"50%",
      width:"50%",
      [sizes.down("xs")]: {
        margin: "0 0.1rem",
        padding: "0.1rem"
      }
    },
    hide: {
      display: "none"
    }
  });
  export default styles;