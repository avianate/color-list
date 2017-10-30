import React from 'react';
import 'normalize.css';
import ColorPicker from "../../components/ColorPicker/ColorPicker";

const AddColorView = (props) => (
    <div>
        <ColorPicker {...props} />
    </div>
)

export default AddColorView;