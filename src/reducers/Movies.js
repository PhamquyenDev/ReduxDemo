import Movies from "../services/Movies";

const inistalState = {
    movies: Movies,
};

const MoviesReducer = (state = inistalState, action) => {
    switch (action.type) {
        case 'FIND':
            if (action.payload) {
                const findTextUpper = action.payload.toUpperCase();
                const newData = state.movies.filter((item) => {
                    const itemdata = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                    return itemdata.indexOf(findTextUpper) > -1;
                });

                state = newData;
            }
    }
    return state;
}

export default MoviesReducer;