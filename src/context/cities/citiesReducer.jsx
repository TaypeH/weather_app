import { ADD_CITY } from "../../utils/const";

const handlers = {
    [ADD_CITY]: (state, { payload }) => [payload, ...state],
    DEFAULT: (state) => state,
};

const citiesReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
};

export default citiesReducer;
