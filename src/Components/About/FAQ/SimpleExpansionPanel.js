import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
const styles = (theme) => ({
    root: {
        maxWidth: "686px",
        margin: "30px auto",
    },
    expansionBox: {
        borderBottom: "1px solid #E6E6E6",
        borderRadius: "0px 0px 8px 8px",
    },
    expansionDetails: {},
    heading: {
        fontSize: theme.typography.pxToRem(22),
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "120%",
        letterSpacing: "0.004em",
        color: "#000000",
        maxWidth: "478px",
    },
    text: {
        color: "#000000",
        opacity: "0.7",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: "300",
        fontSize: "16px",
        lineHeight: "26px",
        letterSpacing: "0.004em",
    },
});

function SimpleExpansionPanel(props) {
    const { classes, title, text } = props;
    const [show, setShow] = useState(true);
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={show ? <AddIcon /> : <RemoveIcon />}
                    className={classes.expansionBox}
                    onClick={() => setShow(!show)}
                >
                    <Typography className={classes.heading}>{title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.expansionDetails}>
                    <Typography className={classes.text}>{text}</Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

SimpleExpansionPanel.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
