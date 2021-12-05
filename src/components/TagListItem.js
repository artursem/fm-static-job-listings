import { useContext } from "react";
import TagContext from "../store/tag-context";
import IconRemove from "./IconRemove";
import classes from "./TagListItem.module.css";

const TagListItem = (props) => {
    const tagCtx = useContext(TagContext);
    const handleTagRemove = (tag) => {
        tagCtx.removeFilter(props.children)
    }
    

	return (
		<button className={classes.tag} onClick={handleTagRemove} >
			<div className={classes.tag__name} >{props.children}</div>
			<div className={classes.tag__X}> <IconRemove/> </div>
		</button>
	);
};

export default TagListItem;
