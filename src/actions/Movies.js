import {
    FETCH_DATA, FIND, FILTER_NAME,
    LOAD_MORE, RELOAD,
    LOAD_SUCCESS, LOAD_ERROR,
} from "./actionsType";
export const addFilterName = (filterName) => {
    return {
        type: FILTER_NAME,
        filterName
    }
}
export const findItem = (filterName) => {
    return {
        type: FIND,
        //movies: movies
        filterName
    }
}

export const loadMoreData = (data) => {
    return {
        type: LOAD_MORE,
        movies: data.results,
        pageCurrent: data.page
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