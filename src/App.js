import { useContext, useState } from "react";
import ContextProvider from "./store/ContextProvider";
import TagContext from "./store/tag-context";
import TagList from "./components/TagList";
import JobList from "./components/JobList";
import "./App.css";

function App() {
	const tagCtx = useContext(TagContext);

	return (
		<ContextProvider>
			<div className="App">
				<header className="App__header"></header>
				{tagCtx.filters && <TagList />}
				<JobList />
			</div>
		</ContextProvider>
	);
}

export default App;
