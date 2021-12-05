import React from "react";
import classes from "./JobItem.module.css";
import TagButton from "./TagButton";

const JobItem = ({ content }) => {
	const itemClasses = content.isFeatured
		? `${classes.li} ${classes.featured}`
		: `${classes.li}`;

	return (
		<li key={content.id} className={itemClasses}>
			<div className={classes.li__main}>
				<div className={classes.main__logo}>{/* <img src={logo} /> */}</div>
				<div className={classes.main__text}>
					<div className={classes.text__header}>
						{content.company}
						{content.isNew && (
							<span className={`${classes.header__capsule} ${classes.new}`}>
								New!
							</span>
						)}
						{content.isFeatured && (
							<span
								className={`${classes.header__capsule}  ${classes.featured}`}
							>
								Featured
							</span>
						)}
					</div>
					<div className={classes.text__body}>{content.name}</div>
					<div className={classes.text__footer}>
						{content.posted} &nbsp;&middot;&nbsp;
						{content.job} &nbsp;&middot;&nbsp;
						{content.location}
					</div>
				</div>
			</div>
			<div className={classes.li__tags}>
				<TagButton tagWord={content.role} />
				<TagButton tagWord={content.level} />
				{[...content.languages, ...content.tools].map((tag) => {
					return (
						<TagButton tagWord={tag} key={tag} />
					);
				})}
			</div>
		</li>
	);
};

export default JobItem;
