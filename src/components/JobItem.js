import React from "react";
import classes from "./JobItem.module.css";
import TagButton from "./TagButton";

import accountIcon from "../assets/account.svg";
import eyecamcoIcon from "../assets/eyecam-co.svg";
import faceitIcon from "../assets/faceit.svg";
import insureIcon from "../assets/insure.svg";
import loopstudiosIcon from "../assets/loop-studios.svg";
import manageIcon from "../assets/manage.svg";
import myhomeIcon from "../assets/myhome.svg";
import photosnapIcon from "../assets/photosnap.svg";
import shortlyIcon from "../assets/shortly.svg";
import airfilterIcon from "../assets/the-air-filter-company.svg";

const companyLogos = {
	j1: photosnapIcon,
	j2: manageIcon,
	j3: accountIcon,
	j4: myhomeIcon,
	j5: loopstudiosIcon,
	j6: faceitIcon,
	j7: shortlyIcon,
	j8: insureIcon,
	j9: eyecamcoIcon,
	j10: airfilterIcon,
};

const JobItem = ({ content }) => {
	const itemClasses = content.isFeatured
		? `${classes.li} ${classes.featured}`
		: `${classes.li}`;

	return (
		<li key={content.id} className={itemClasses}>
			<div className={classes.li__main}>
				<div className={classes.main__logo}>
					<img src={companyLogos[content.id]} />
				</div>
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
					return <TagButton tagWord={tag} key={tag} />;
				})}
			</div>
		</li>
	);
};

export default JobItem;
