import React from "react";
import {
    FETCH_DATA, FIND, LOAD_MORE,
    LOAD_SUCCESS, LOAD_ERROR,
    FILTER_NAME
} from "../actions/actionsType";

const iniitalState = {
    movies: null,
    filterName: null,
    isLoading: false,
    pageCurrent: 1,
};

const MoviesReducer = (state = iniitalState, action) => {
    switch (action.type) {
        case LOAD_SUCCESS:
            return {
                movies: action.movies,
                pageCurrent: action.page
            };
        case LOAD_ERROR:
            console.log(action)
            return {
                ...state,
                movies: [],
            };

        case FIND: {
            console.log(action)
            // return {
            //     ...state,
            //     movies: action.movies
            // }

            const findTextUpper = action.filterName.toUpperCase();
            const newData = state.movies.filter((item) => {
                const itemdata = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                return itemdata.indexOf(findTextUpper) > -1;
            });
            console.log(newData)
            return {
                ...state,
                movies: newData,
                filterName: action.filterName
            }
        }

        case FILTER_NAME:
            return {
                ...state,
                ...state.movies,
                filterName: action.filterName
            };

        case LOAD_MORE:
            console.log(action);
            return {
                ...state,
                movies: [
                    ...state.movies,
                    ...action.movies,
                ],
                pageCurrent: action.pageCurrent
            }

        default: return state;
    }

}

export default MoviesReducer;