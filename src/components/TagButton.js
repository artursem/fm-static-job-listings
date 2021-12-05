import { useContext } from "react";
import TagContext from "../store/tag-context";
import classes from "./TagButton.module.css";

function TagButton(props) {
    const tagCtx = useContext(TagContext);
	const handleTagClick = () => {
		tagCtx.addFilter(props.tagWord)
	};

	return (
		<button className={classes.tag} onClick={handleTagClick}>
			{props.tagWord}
		</button>
	);
}

export default TagButton;
