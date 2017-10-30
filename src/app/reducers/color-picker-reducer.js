export const ADD_COLOR = "ADD_COLOR";
export const RATE_COLOR = "RATE_COLOR";
export const REMOVE_COLOR = "REMOVE_COLOR";
export const SORT_COLORS = "SORT_COLORS";

export default (state = [], action) => {
    switch(action.type) {
        case ADD_COLOR:
            return [...state, action.payload];
        case RATE_COLOR:
            return state.map(color =>
                (color.id !== action.payload.id)
                    ? color
                    : { ...color, ...action.payload }
            );
        case REMOVE_COLOR: 
            return state.filter(color => color.id !== action.colorId);
        case SORT_COLORS:
        default:
            return state;
    }
}