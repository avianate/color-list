import React from "react";
import AddColorForm from "../AddColorForm/AddColorForm";
import ColorList from "../ColorList/ColorList";


export default ({colors=[], onAdd, onRemove, onRate}) => (
    <div className="color-picker">
        <AddColorForm onAdd={onAdd} />
        <ColorList colors={colors}
            onRate={onRate}
            onRemove={onRemove}
        />
    </div>
)