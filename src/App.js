import React from "react";
import ContextProvider from "./store/ContextProvider";
// import TagContext from "./store/tag-context";
import TagList from "./components/TagList";
import JobList from "./components/JobList";
import "./App.css";

function App() {
	return (
		<ContextProvider>
			<div className="App">
				<header className="App__header"></header>
				<TagList/>
				<JobList />
			</div>
		</ContextProvider>
	);
}

export default App;
