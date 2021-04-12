import {
    FETCH_DATA, FIND, LOAD_MORE, RELOAD, LOAD_SUCCESS, LOAD_ERROR
} from "./actionsType";

export const findItem = (findName) => {
    return {
        type: FIND,
        findName: findName
    }
}

export const loadMoreData = (data, page) => {
    return {
        type: LOAD_MORE,
        movies: data.results,
        page: page
    }
}

export const reloadData = () => {
    return {
        type: RELOAD,
    }
}

// redux saga actions
export const loadSuccess = (moviesData, page) => {
    return {
        type: LOAD_SUCCESS,
        movies: moviesData.results,
        page: page
    }
}

export const loadError = (error) => {
    return {
        type: LOAD_ERROR,
        error
    }
}