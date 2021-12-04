import React from "react";
import { jobs } from "../data/jobs.json";
import JobItem from "./JobItem";
// import logo from "../assets/loop-studios.svg";
function JobList(props) {

	const handleFilter = (tag) => {
        console.log('JobItem.js', tag);
    }

	const jobList = jobs.map((job) => {
		return (
			<JobItem content={job} onFilterTag={handleFilter} key={job.id} /> 
		);
	});
	return <ul>{jobList}</ul>;
}

export default JobList;
