
function creatStore(reducer){
	const listeners = [];
	const getState = () => state;
	const dispatch = action => {
		reducer(action);
		listeners.forEach(listener => listener())
	}

	const subscribe = (listener) => listeners.push(listener);
	return {
		getState,
		dispatch,
		subscribe
	}
}