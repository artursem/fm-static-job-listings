import React from "react";
import ContextProvider from "./store/ContextProvider";
import TagList from "./components/TagList";
import JobList from "./components/JobList";
import "./App.css";

function App() {

	return (
		<ContextProvider>
			<div className="App">
				<header className="App__header"></header>
				<TagList
				//  tagList={filters}
				/>
				<JobList />
			</div>
		</ContextProvider>
	);
}

export default App;
