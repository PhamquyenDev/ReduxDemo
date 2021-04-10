import {
    FETCH_DATA, FIND, LOAD_MORE, RELOAD, LOAD_SUCCESS, LOAD_ERROR
} from "../actions/actionsType";

const iniitalState = {
    movies: null,
    findName: '',
    page: 1
};

const MoviesReducer = (state = iniitalState, action) => {
    switch (action.type) {
        case LOAD_SUCCESS:
            console.log(action);
            return {
                movies: action.movies
            };

        case FIND:
            // if (action.findName) {
            //     const findTextUpper = action.findName.toUpperCase();
            //     const newData = movies.filter((item) => {
            //         const itemdata = item.name ? item.name.toUpperCase() : ''.toUpperCase();
            //         return itemdata.indexOf(findTextUpper) > -1;
            //     });

            //     return { movies: newData, findName: action.findName }
            // }
            // else {
            //     return { movies: Movies, findName: action.findName }
            // }
            return state;

        case LOAD_MORE:
            return {
                ...state,
                page: action.value++
            };

        case LOAD_ERROR:
            console.log(action)
            return {
                ...state,
                movies: [],
            };
        default: return state;
    }
}

export default MoviesReducer;