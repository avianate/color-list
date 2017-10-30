import React from "react";
import Rating from "../Rating/Rating";
import classes from "join-classnames";
import styles from "./Color.css";

const Color = ({ color, rating, onRemove, onRate }) => (
    <section className={classes(styles.color, "color-tile")}>
        <h1>{color.title}</h1>
        <button onClick={() => onRemove(color.id)}>X</button>
        <div className={styles.colorband}
                style={{ backgroundColor: color.color.toString() }} >
        </div>
        <Rating selected={color.rating || 0} 
                color={color}
                onRate={onRate} />
    </section>
)

export default Color;