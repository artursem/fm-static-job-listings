import React, { useContext } from "react";
import TagContext from "../store/tag-context";
import { jobs } from "../data/jobs.json";
import JobItem from "./JobItem";

function JobList() {
	const tagCtx = useContext(TagContext);

	const filterByTags = (arr, filters) => {
		if (filters.length > 0) {
			return arr.filter((item) => {
				return (
					Object.values(item).some((val) => filters.includes(val)) ||
					item.languages.some((val) => filters.includes(val)) ||
					item.tools.some((val) => filters.includes(val))
				);
			});
		} else {
			return arr;
		}
	};

	const filteredJobs = filterByTags(jobs, tagCtx.filters);

	const jobList = filteredJobs.map((job) => {
		return <JobItem content={job} key={job.id} />;
	});

	return (
		<React.Fragment>
			<ul>{jobList}</ul>
		</React.Fragment>
	);
}

export default JobList;
