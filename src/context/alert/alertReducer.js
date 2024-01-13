import { HIDE_ALERT, SHOW_ALERT } from "../../utils/const";

const handlers = {
    [SHOW_ALERT]: (_, { payload }) => ({
        ...payload,
        visible: true,
    }),
    [HIDE_ALERT]: () => ({ visible: false }),
    DEFAULT: (state) => state,
};

const alertReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT;

    return handle(state, action);
};

export default alertReducer;
