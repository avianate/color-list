import React from "react";
import Color from "../Color/Color";
import classes from "join-classnames";
import styles from "./ColorList.css";

const ColorList = ({ colors=[], onRate, onRemove }) => {
    return (
        <div className={styles.colorList}>
            {
                (colors.length === 0)
                    ? <p>No colors listed. (Add a color)</p>
                    : colors.map(color => (
                        <Color key={color.id}
                            color={color}
                            onRate={onRate}
                            onRemove={onRemove}
                        />
                    ))
            }
        </div>
    )
}

export default ColorList;