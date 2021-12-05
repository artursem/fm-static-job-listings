import React from "react";
import { jobs } from "../data/jobs.json";
import JobItem from "./JobItem";

// import logo from "../assets/loop-studios.svg";
function JobList(props) {
	

	// const handleFilter = (tag) => {
	// 	console.log("JobItem.js", tag);
	// 	setFilters((prevState) => [...prevState, tag]);
	// };

	const jobList = jobs.map((job) => {
		return <JobItem content={job} key={job.id} />;
	});

	return (
		<React.Fragment>
			<ul>{jobList}</ul>
		</React.Fragment>
	)
}

export default JobList;
