import React from "react";
import { jobs } from "../data/jobs.json";
import JobItem from "./JobItem";
// import logo from "../assets/loop-studios.svg";
function JobList() {
	const jobList = jobs.map((job) => {
		return (
			<JobItem content={job} /> 
		);
	});

	console.log(jobs.map((j) => j.name));
	return <ul>{jobList}</ul>;
}

export default JobList;
