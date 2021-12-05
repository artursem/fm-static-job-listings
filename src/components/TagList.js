import { useContext } from "react";
import TagContext from "../store/tag-context";
import TagListItem from "./TagListItem";
import classes from "./TagList.module.css";

function TagList() {
	const tagCtx = useContext(TagContext);
	const list = tagCtx.filters.map((filter) => (
		<TagListItem key={filter}>{filter}</TagListItem>
	));

	return <div className={classes.tagList}>{list}</div>;
}

export default TagList;
