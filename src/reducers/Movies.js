import {
    FETCH_DATA, FIND, LOAD_MORE, LOAD_SUCCESS, LOAD_ERROR
} from "../actions/actionsType";

const iniitalState = {
    movies: null,
    findName: '',
    isLoading: false,
    page: 1
};

const MoviesReducer = (state = iniitalState, action) => {
    switch (action.type) {
        case LOAD_SUCCESS:
            return {
                movies: action.movies,
                page: action.page
            };
        case LOAD_ERROR:
            console.log(action)
            return {
                ...state,
                movies: [],
            };

        case FIND: {
            if (action.findName) {
                const findTextUpper = action.findName.toUpperCase();
                const newData = movies.filter((item) => {
                    const itemdata = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                    return itemdata.indexOf(findTextUpper) > -1;
                });
                return {
                    movies: newData,
                    findName: action.findName
                }
            }
            else return {
                ...state
            }
        }

        case LOAD_MORE:
            return {
                ...state,
                movies: [...state.movies, action.movies],
                page: action.page
            };

        default: return state;
    }
}

export default MoviesReducer;