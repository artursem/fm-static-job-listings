import React from 'react'
import classes from './TagList.module.css';

function TagList(props) {
    return (
        <div className={classes.tagList} >
            {props.tagList.map(filter => <p>{filter}</p>)}
        </div>
    )
}

export default TagList
