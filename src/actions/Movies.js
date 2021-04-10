import {
    FETCH_DATA, FIND, LOAD_MORE, RELOAD, LOAD_SUCCESS, LOAD_ERROR
} from "./actionsType";

export const findItem = (findName) => {
    return {
        type: FIND,
        findName
    }
}

export const loadMoreData = (value) => {
    return {
        type: LOAD_MORE,
        value
    }
}

export const reloadData = () => {
    return {
        type: RELOAD,
    }
}

// redux saga actions
export const loadSuccess = (moviesData) => {
    return {
        type: LOAD_SUCCESS,
        movies: moviesData.results
    }
}

export const loadError = (error) => {
    return {
        type: LOAD_ERROR,
        error
    }
}