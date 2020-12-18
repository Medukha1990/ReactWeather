const defaultState = {
	city: null,
};
export function rootReducer(state = defaultState, action) {
	switch (action.type) {
		case 'SET_CITY':
			return { ...state, city: action.payload };
		default:
			return state;
	}
}
