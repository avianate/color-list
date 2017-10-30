import * as actions from "../reducers/color-picker-reducer.js";

export function onRemoveColor(colorId) {
    return {
        type: actions.REMOVE_COLOR,
        colorId: colorId
    }
}

export function onAddColor(title, color) {
    return {
        type: actions.ADD_COLOR,
        payload: {
            title: title,
            color: color,
            id: new Date() | title,
            timeStamp: new Date(),
            rating: 0
        }
    }
}

export function onRateColor(colorId, rating) {
    return {
        type: actions.RATE_COLOR,
        payload: {
            id: colorId,
            rating: rating
        }
    }
}