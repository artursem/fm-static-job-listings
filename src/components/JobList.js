import React from "react";
import { jobs } from "../data/jobs.json";
import JobItem from "./JobItem";
import TagList from "./TagList";
// import logo from "../assets/loop-studios.svg";
function JobList(props) {
	const [filters, setFilters] = useState([]);

	const handleFilter = (tag) => {
		console.log("JobItem.js", tag);
		setFilters((prevState) => [...prevState, tag]);
	};

	const jobList = jobs.map((job) => {
		return <JobItem content={job} onFilterTag={handleFilter} key={job.id} />;
	});

	return (
		<React.Fragment>
			<TagList tagList={filters} />
			<ul>{jobList}</ul>
		</React.Fragment>
	)
}

export default JobList;
