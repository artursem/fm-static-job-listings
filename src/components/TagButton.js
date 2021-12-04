import React from 'react'
import classes from './TagButton.module.css';
function TagButton(props) {
    const handleTagClick = (e) => {
        props.onFilterTag(e.target.innerText);
    }
    

    return (
        <button className={classes.tag} onClick={handleTagClick} >
            {props.tagWord}
        </button>
    )
}

export default TagButton
