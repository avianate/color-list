import React from "react";
import classes from 'join-classnames';
import styles from "./Star.css";

const Star = ({ selected = false, onClick }) => (
    <div className={classes(styles.star, (selected) ? styles.selected : "")}
         onClick={onClick} >
    </div>
)

export default Star;