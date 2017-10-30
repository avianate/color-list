import React from "react";
import classes from "join-classnames";
import styles from "./AddColorForm.css";

export default ({onAdd}) => {
    let _title, _color;
    const submit = e => {
        e.preventDefault()
        
        onAdd(_title.value, _color.value)
        _title.value = "";
        _color.value = "#000000";
        _title.focus();
    }

    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input}
                    type="text"
                    placeholder="color title..." required
            />
            <input ref={input => _color = input}
                    type="color" required
            />
            <button>Add</button>
        </form>
    )
}