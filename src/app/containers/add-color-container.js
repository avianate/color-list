import React, { Component } from "react";
import { connect } from "react-redux";
import { setPageMeta } from "../actions/page-meta";
import AddColorView from "../views/AddColorView";
import { onRemoveColor, onAddColor, onRateColor } from "../actions/color-picker-actions.js";

const pageMeta = {
    title: "Reading List",
    tags: [
        { "name": "description", "content": "A react reading list" },
        { "property": "", "content": "article" }
    ]
};

const mapStateToProps = (state) => ({
    colors: state.colorList
});

const bindActionsToDispatch = (dispatch) => ({
    onAdd: (title, color) => dispatch(onAddColor(title, color)),
    onRemove: (colorId) => dispatch(onRemoveColor(colorId)),
    onRate: (colorId, rating) => dispatch(onRateColor(colorId, rating)),
    setPageMeta: (metadata) => dispatch(setPageMeta(metadata))
});

const mergeAllProps = (store, actions) => ({
    ...store,
    ...actions,
    init: () => actions.setPageMeta(pageMeta),
    pageTitle: "React/Redux Start"
});

const storeConnector = connect(
    mapStateToProps,
    bindActionsToDispatch,
    mergeAllProps
);

class ColorContainer extends Component {

    static onServer(props, store) {
        return store.dispatch(setPageMeta(pageMeta))
    }

    componentDidMount() {
        this.props.init();
    }

    render() {
        return <AddColorView {...this.props} />
    }
}

export default storeConnector(ColorContainer);