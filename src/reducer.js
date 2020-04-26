const initilState = {
    counter: 0,
}

const reducer = (state = initilState, action) => {

    switch (action.type) {
        case 'RND':
            return {
                counter: state.counter + action.payload,
            };

        case 'INC':
            return {
                counter: state.counter + 1,
            };

        case 'DEC':
            return {
                counter: state.counter - 1,
            };

        default:
            return state;
    }
};

export default reducer;