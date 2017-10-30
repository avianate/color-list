import React from "react";
import Star from "../Star/Star";
import * as styles from "./Rating.css";

const Rating = ({color, selected = 0, total = 5, onRate }) => (
    <div className={styles.rating}>
        {
            [...Array(total)].map((n, i) => {
                return (<Star key={i}
                    selected={i < selected}
                    onClick={() => (onRate(color.id, i + 1))}
                />)
            }
            )
        }
        <p>{selected} of {total}</p>
    </div>
);

export default Rating;