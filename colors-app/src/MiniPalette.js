import React from 'react';
import { withStyles } from "@material-ui/styles";

const styles={
    main: {
        backgroundColor: "purple",
        border: "3px solid teal"
      },
      secondary: {
        backgroundColor: "pink",
        "& h1": {
          color: "white",
          "& span": { //this is lnesting these components effeciently
            backgroundColor: "yellow"
          }
        }
      }
};

function MiniPalette(props) {
  const { classes } = props;
  

  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>
        <h1>
          Mini Palette <span>ajskhd</span>
        </h1>
        <span>ajskhd</span>
      </section>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
