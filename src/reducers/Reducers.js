const Reducer = (state, action) => {
	switch (action.type) {
		case 'SET_SUBJECTS':
			return {
				...state,
				subjectsList: action.payload,
			};
		case 'SET_TOPICS':
			return {
				...state,
				topicsList: action.payload,
			};
		case 'REMOVE_POST':
			return {
				...state,
				posts: state.posts.filter((post) => post.id !== action.payload),
			};
		case 'SET_ERROR':
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default Reducer;
