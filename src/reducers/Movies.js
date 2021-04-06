import Movies from "../services/Movies";

const inistalState = {
    movies: Movies,
    findName: '',
};

const MoviesReducer = (state = inistalState, action) => {
    switch (action.type) {
        case 'FIND':
            if (action.findName) {
                const findTextUpper = action.findName.toUpperCase();
                const newData = movies.filter((item) => {
                    const itemdata = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                    return itemdata.indexOf(findTextUpper) > -1;
                });

                return { movies: newData, findName: action.findName }
            }
            else {
                return { movies: Movies, findName: action.findName }
            }
    }
    return state;
}

export default MoviesReducer;