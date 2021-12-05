import React from "react";
import TagContext from "./tag-context";

function ContextProvider(props) {
	const tagContext = {
		filters: [],
		addFilter: (filter) => {console.log(filter, 'add');},
		removeFilter: (filter) => {console.log(filter, 'remoeve');},
	};

	return (
		<TagContext.Provider value={tagContext}>
			{props.children}
		</TagContext.Provider>
	);
}

export default ContextProvider;
