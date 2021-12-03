import React from "react";
import { jobs } from "../data/jobs.json";
// import logo from "../assets/loop-studios.svg";
function JobList() {
	const jobList = jobs.map((job) => {
		return (
			<li key={job.id}>
				{job.company}
				{job.job}
				{job.location}
				{job.name}
				{job.role}
				{job.posted}
				{job.level}
				{job.languages.join(", ")},{job.tools.join(", ")}
				{/* <img src={logo} /> */}
			</li>
		);
	});

	console.log(jobs.map((j) => j.name));
	return <ul>{jobList}</ul>;
}

export default JobList;
