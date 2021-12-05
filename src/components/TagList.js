import React from 'react'
import classes from './TagList.module.css';

function TagList(props) {
    return (
        <div className={classes.tagList} >
            {/* {props.tagList.map(filter => <p>{filter}</p>)} */}
            tag list
        </div>
    )
}

export default TagList
