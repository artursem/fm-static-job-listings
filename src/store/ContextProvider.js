import { useReducer } from "react";
import TagContext from "./tag-context";

const TAG = {
	ADD: "add-tag",
	REMOVE: "reomve-tag",
	CLEAR: "clear-tag",
};

const tagReducer = (state, action) => {
	switch (action.type) {
		case TAG.ADD:
			if (state.includes(action.value)) {
				return state;
			} else {
				return [...state, action.value];
			}

		case TAG.REMOVE:
			return state.filter((tag) => tag !== action.value);
	}
	return [];
};

function ContextProvider(props) {
	const [tagState, dispatchTag] = useReducer(tagReducer, []);

	const addFilterHandler = (tag) => {
		dispatchTag({ type: TAG.ADD, value: tag });
	};

	const removeFilterHandler = (tag) => {
		dispatchTag({ type: TAG.REMOVE, value: tag });
	};

	const tagContext = {
		filters: [...tagState],
		addFilter: addFilterHandler,
		removeFilter: removeFilterHandler,
	};

	return (
		<TagContext.Provider value={tagContext}>
			{props.children}
		</TagContext.Provider>
	);
}

export default ContextProvider;
